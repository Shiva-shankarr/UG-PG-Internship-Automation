import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import registerImage from '../components/Images/Registration_00.jpg';
import loginImage from '../components/Images/Login_00.jpeg';

function Student_portal() {
  return (
    <div className="container mt-5">
    <div className='display-4 fw-bold text-center mb-5'>Student Portal</div>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <Link to="/Student_Register" className="btn btn-outline-primary mb-3">
            <img src={registerImage} alt="New Registration" className="img-fluid mb-2" />
            <div>New Registration</div>
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <Link to="/Student_Login" className="btn btn-outline-secondary mb-3">
            <img src={loginImage} alt="Login" className="img-fluid mb-2" />
            <div>Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Student_portal;
