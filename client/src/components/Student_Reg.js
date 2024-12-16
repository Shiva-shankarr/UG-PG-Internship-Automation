import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Student_Reg() {
  const [studentName, setStudentName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [section, setSection] = useState('');
  const [branch, setBranch] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newstudent = { studentName, rollNo, section, branch, phoneNo, email, username, password };
    console.log(newstudent);
  
    try {
      const res = await axios.post('http://localhost:4000/student_api/register', newstudent);
      console.log(res);
  
      if (res.data.message === 'Student created') {
        console.log("this is trying to navigate");
        navigate('/Student_Login');
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
      setError('Network error: Unable to reach the server');
    }
  };
  

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow p-4" style={{ background: '#f8f9fa' }}>
            <h2 className="text-center mb-4">Student Registration</h2>
            {err.length !== 0 && <p className='text-danger fs-3'>{err}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="studentName" className="form-label">Student Name:</label>
                <input type="text" className="form-control" id="studentName" value={studentName} onChange={(e) => setStudentName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="rollNo" className="form-label">Roll No:</label>
                <input type="text" className="form-control" id="rollNo" value={rollNo} onChange={(e) => setRollNo(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="section" className="form-label">Section:</label>
                <input type="text" className="form-control" id="section" value={section} onChange={(e) => setSection(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="branch" className="form-label">Branch:</label>
                <input type="text" className="form-control" id="branch" value={branch} onChange={(e) => setBranch(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="phoneNo" className="form-label">Phone No:</label>
                <input type="tel" className="form-control" id="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
            
              <div className="text-center mt-4">
                <button type="submit" className="btn btn-primary btn-lg mb-3">Submit</button><br></br>
                Already User? <Link to='/Student_Login'>Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_Reg;
