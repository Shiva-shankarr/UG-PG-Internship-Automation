import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function FacultyLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [err, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/faculty_api/login', formData);
      console.log(res.data);
      if (res.data.message === 'login successful') {
        console.log("Login successful");
        // Store the token in local storage
        localStorage.setItem('token', res.data.token);
        navigate('/Faculty_Dashboard');
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4" style={{ background: '#f8f9fa' }}>
            <h2 className="text-center mb-4">Faculty Login</h2>
            {err && <p className='text-danger fs-3'>{err}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="form-control"
                />
              </div>
              <div className="d-grid gap-2 text-center">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
              <div className="text-center mt-3">
                New User? <Link to="/Faculty_Reg" className="link-primary">Register Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyLogin;
