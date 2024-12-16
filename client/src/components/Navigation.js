import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import pic1 from '../../src/components/Images/Vnr_logo.jpg';  // Ensure the path to your image is correct

function Navigation() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    // Navigate to home page
    navigate('/');
  };

  // Check if token exists in local storage
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav className='navbar navbar-light shiv'>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        {/* Image on the left */}
        <Link className='navbar-brand' to="/">
          <img src={pic1} alt="Logo" width="80" height="80" className="d-inline-block align-top" />
        </Link>
        {/* Centered text */}
        <div className='mx-auto'>
          <h5 className='text-center mb-0 text-white'>UG/PG Internship Automation</h5>
        </div>
        {/* Conditional rendering based on login status */}
        <div className='d-flex align-items-center'>
          {isLoggedIn ? (
            // Logout button when logged in
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
          ) : (
            // Login button when logged out
            <Link to="/" className='btn btn-primary'>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
