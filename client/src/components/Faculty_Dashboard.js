import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FacultyDashboard() {
  const [internships, setInternships] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    company: '',
    stipend: '',
    branch: '',
    year: '',
    section: '',
    location: ''
  });

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    try {
      const response = await axios.get('http://localhost:4000/faculty_api/internships');
      setInternships(response.data);
    } catch (error) {
      console.error('Error fetching internships:', error);
    }
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({ ...prevFilter, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/faculty_api/internships', filter);
      setInternships(response.data);
    } catch (error) {
      console.error('Error searching internships:', error);
    }
  };

  return (
    <div className="container">
      <div className="display-3 fw-bold text-center mt-2 mb-2">Faculty Dashboard</div>
      <div className="filter-container w-75 m-auto mt-5 shadow p-5 border border-dark fw-bold">
        <h4>Filter Internships</h4>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                value={filter.name}
                onChange={handleFilterChange}
                className="form-control"
                placeholder="Search by name"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Company:</label>
              <input
                type="text"
                name="company"
                value={filter.company}
                onChange={handleFilterChange}
                className="form-control"
                placeholder="Search by company"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Stipend:</label>
              <input
                type="number"
                name="stipend"
                value={filter.stipend}
                onChange={handleFilterChange}
                className="form-control"
                placeholder="Search by stipend"
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Branch:</label>
              <select
                name="branch"
                value={filter.branch}
                onChange={handleFilterChange}
                className="form-select"
              >
                <option value="">Select branch</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Year:</label>
              <select
                name="year"
                value={filter['Start Date']}
                onChange={handleFilterChange}
                className="form-select"
              >
                <option value="">Select year</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Section:</label>
              <select
                name="section"
                value={filter.section}
                onChange={handleFilterChange}
                className="form-select"
              >
                <option value="">Select section</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">Location:</label>
              <input
                type="text"
                name="location"
                value={filter.location}
                onChange={handleFilterChange}
                className="form-control"
                placeholder="Search by location"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Search
          </button>
        </form>
      </div>
      <div className="mt-5">
        <h4 className="text-center">Filtered Internships</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Stipend</th>
                <th>Branch</th>
                <th>Year</th>
                <th>Section</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {internships.map((internship) => (
                <tr key={internship._id}>
                  <td>{internship.Name}</td>
                  <td>{internship['Internship Offered Company Name']}</td>
                  <td>{internship['Monthly Stipend']}</td>
                  <td>{internship.Branch}</td>
                  <td>{internship['Starting Date']}</td>
                  <td>{internship.Section}</td>
                  <td>{internship['Internship Offered Company Address']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default FacultyDashboard;
