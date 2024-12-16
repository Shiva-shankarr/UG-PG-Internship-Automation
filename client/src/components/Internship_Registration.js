import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function InternshipRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Timestamp: '',
    Name: '',
    'Roll Number':'',
    Branch: '',
    Section: '',
    'Mobile Number':'',
    MailId: '',
    'Internship Offered Company Name': '',
    'Internship Offered Company Address': '',
    'Monthly Stipend': '',
    Duration: '',
    'Starting Date': '',
    'Ending Date': '',
    'Name of the HR or Lead': '',
    'Mail Id of the HR or Lead': '',
    'Website of the Internship Offered Company': '',
    'Role of the Internship': '',
    'Internship Offer Letter': ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Convert 'Monthly Stipend' to a number if it is the field being updated
    if (id === 'Monthly Stipend') {
      setFormData({
        ...formData,
        [id]: Number(value)
      });
    } 
    else if (id === 'Mobile Number') {
      setFormData({
        ...formData,
        [id]: Number(value)
      });
    } else {
      setFormData({
        ...formData,
        [id]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.Timestamp = new Date().toISOString(); // Add timestamp
    console.log(formData)
    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:4000/student_api/add-internship', formData);

      // Handle response from backend
      if (response.data.message === 'Internship added successfully') {
        alert('Successfully Registered');
        navigate('/Student_Dashboard');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error submitting the form!', error);
      alert('There was an error submitting the form.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Internship Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="Name" value={formData.Name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="RollNumber" className="form-label">Roll Number</label>
                  <input type="text" className="form-control" id="Roll Number" value={formData['Roll Number']} onChange={handleChange} placeholder="Enter roll number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Branch" className="form-label">Branch</label>
                  <input type="text" className="form-control" id="Branch" value={formData.Branch} onChange={handleChange} placeholder="Enter branch" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Section" className="form-label">Section</label>
                  <input type="text" className="form-control" id="Section" value={formData.Section} onChange={handleChange} placeholder="Enter section" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="MobileNumber" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="Mobile Number" value={formData['Mobile Number']} onChange={handleChange} placeholder="Enter mobile number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="MailId" className="form-label">Mail Id</label>
                  <input type="email" className="form-control" id="MailId" value={formData.MailId} onChange={handleChange} placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Internship Offered Company Name" className="form-label">Internship Offered Company Name</label>
                  <input type="text" className="form-control" id="Internship Offered Company Name" value={formData['Internship Offered Company Name']} onChange={handleChange} placeholder="Enter company name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Internship Offered Company Address" className="form-label">Internship Offered Company Address</label>
                  <textarea className="form-control" id="Internship Offered Company Address" value={formData['Internship Offered Company Address']} onChange={handleChange} rows="3" placeholder="Enter company address" required></textarea>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="MonthlyStipend" className="form-label">Monthly Stipend</label>
                    <input type="text" className="form-control" id="Monthly Stipend" value={formData['Monthly Stipend']} onChange={handleChange} placeholder="Enter stipend" required />
                  </div>
                  <div className="col">
                    <label htmlFor="Duration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="Duration" value={formData.Duration} onChange={handleChange} placeholder="Enter duration" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="StartingDate" className="form-label">Starting Date</label>
                    <input type="date" className="form-control" id="Starting Date" value={formData['Starting Data']} onChange={handleChange} required />
                  </div>
                  <div className="col">
                    <label htmlFor="EndingDate" className="form-label">Ending Date</label>
                    <input type="date" className="form-control" id="Ending Date" value={formData['Ending Date']} onChange={handleChange} required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Name of the HR or Lead" className="form-label">Name of the HR or Lead</label>
                  <input type="text" className="form-control" id="Name of the HR or Lead" value={formData['Name of the HR or Lead']} onChange={handleChange} placeholder="Enter HR or Lead name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Mail Id of the HR or Lead" className="form-label">Mail Id of the HR or Lead</label>
                  <input type="email" className="form-control" id="Mail Id of the HR or Lead" value={formData['Mail Id of the HR or Lead']} onChange={handleChange} placeholder="Enter HR or Lead email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Website of the Internship Offered Company" className="form-label">Website of the Internship Offered Company</label>
                  <input type="url" className="form-control" id="Website of the Internship Offered Company" value={formData['Website of the Internship Offered Company']} onChange={handleChange} placeholder="Enter company website" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Role of the Internship" className="form-label">Role of the Internship</label>
                  <input type="text" className="form-control" id="Role of the Internship" value={formData['Role of the Internship']} onChange={handleChange} placeholder="Enter internship role" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="Internship Offer Letter" className="form-label">Internship Offer Letter URL</label>
                  <input type="url" className="form-control" id="Internship Offer Letter" value={formData['Internship Offer Letter']} onChange={handleChange} placeholder="Enter offer letter URL" required />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipRegistration;