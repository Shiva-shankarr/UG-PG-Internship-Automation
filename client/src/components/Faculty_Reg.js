import React, { useState } from 'react';
import '../components/CSS/Faculty_Reg.css'// Import CSS file for styling
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Faculty_Reg() {
  const [formData, setFormData] = useState({
    facultyName: '',
    facultyId: '',
    department: '',
    subject: '',
    phoneNumber: '',
    username: '',
    email: '',
    password: ''
  });
  let[err,setError]=useState('')
  let navigate=useNavigate() 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., API calls, validation
    console.log('Form submitted with values:', formData);
    
    // You can add further logic here for form submission
    let res=await axios.post('http://localhost:4000/faculty_api/register',formData)
    console.log(res)
    if(res.data.message=='Faculty created')
    {
      console.log("this is trying to navigate")
      navigate('/Faculty_Login')
    }
    else{
        setError(res.data.message)
    }
  };

  return (
    <div className="faculty-registration mt-5">
      <h2>Faculty Registration</h2>
      {err.length!=0 && <p className='text-danger fs-3'>{err}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="facultyName">Faculty Name:</label>
          <input
            type="text"
            id="facultyName"
            name="facultyName"
            value={formData.facultyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="facultyId">ID:</label>
          <input
            type="text"
            id="facultyId"
            name="facultyId"
            value={formData.facultyId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <br></br>
        <div className='text-center'>Already User? <Link to='/Faculty_Login'>Login</Link> </div>
      </form>
    </div>
  );
}

export default Faculty_Reg;
