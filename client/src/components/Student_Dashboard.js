import React from 'react';
import { Link } from 'react-router-dom';

function Student_Dashboard() {
  return (
    <div className="container mt-5">
      <div className="display-4 fw-bold text-center mb-4">Student Dashboard</div>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Link to="/Internship_Reg">
            <button className="btn btn-success btn-lg w-100">
               Internship Registration
            </button>
          </Link>
        </div>
        <div className="col-md-6 mb-4">
          <Link to="/PreviousInternship">
            <button className="btn btn-info btn-lg w-100">
              View Previous Information
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Student_Dashboard;
