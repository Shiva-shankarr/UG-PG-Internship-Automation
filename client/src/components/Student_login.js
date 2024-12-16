import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { StudUsername } from './contexts/CredContext';
function Student_login() {
  //Student Context
  let [studusername,setStdUsername]=useContext(StudUsername)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const stdCred = { username, password };
    console.log(stdCred);

    try {
      const res = await axios.post('http://localhost:4000/student_api/login', stdCred);
      console.log(res);

      if (res.data.message === "login successful") {
        console.log("Login successful");
        setStdUsername(username)
        // Store the token in local storage
        localStorage.setItem('token', res.data.token);
        navigate('/Student_Dashboard');
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
        <div className="col-md-6">
          <div className="card shadow p-4" style={{ background: '#f8f9fa' }}>
            <h2 className="text-center mb-4">Student Login</h2>
            {err.length !== 0 && <p className='text-danger fs-3'>{err}</p>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username:</label>
                <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="d-grid gap-2 text-center">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
              <div className="text-center mt-3">
                New User? <Link to="/Student_Register" className="link-primary">Register Here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_login;
