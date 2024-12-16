import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import studentImage from '../components/Images/student_00.jpg';
import facultyImage from '../components/Images/Faculty_00.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1 className="display fw-bold font-weight-bold text-info">
            Welcome to the VNR VJIET UG / PG Internship Automation Portal!
          </h1>
          <p className="lead mt-4">
            This platform is designed to streamline the process of finding and securing internships for our students. Whether you're an undergraduate or postgraduate, our automated system simplifies applications, enhances communication with employers, and helps match you with the best opportunities based on your skills and interests. Start your internship journey with us and take the first step towards a successful career.
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 text-center">
    
          <img src={studentImage} alt="Students" width="100" height="100" className="img-fluid mb-3" /><br></br>
          <Link to='/Student_portal'>
          <button className="btn btn-primary mb-3">Student Portal</button>
          </Link>
        </div>
        <div className="col-md-6 text-center">
          <img src={facultyImage} alt="Faculty" width="100" height="100" className="img-fluid mb-3" /><br></br>
          <Link to='/Faculty_portal'>
          <button className="btn btn-secondary mb-3">Faculty Portal</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
