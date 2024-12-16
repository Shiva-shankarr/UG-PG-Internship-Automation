import React, { useContext, useEffect } from 'react'
import { StudUsername } from './contexts/CredContext'
import { useState } from 'react';
import axios from 'axios';

export const PreviousInternship = () => {
    let [studusername,setStdUsername] =useContext(StudUsername)
    const [err, setError] = useState('');
    console.log("Student name=",studusername)
    let[rollNo,setRollNo]=useState()
    let[internships,setInternships]=useState([])
    //useEffect
    // useEffect(()=>{
      

     
    
        
       
     
      
    // },[])    

    function handleSubmit()
    {
        try
        {
          axios.get(`http://localhost:4000/student_api/student/${studusername}`)
          .then(response=>{
            setRollNo(response.data.payload)
          })
          .catch(error=>{
            console.error('There was an error making the GET request!', error);
          });
          
  
            let previousIntershipData = axios.get(`http://localhost:4000/student_api/internships/${rollNo}`)
            .then(response=>
            {
              setInternships(response.data.payload)
            }
            )
        }
        catch(error)
        {
            console.log(error)
        }
    }
  return (

    <div className='container'>
      <button className='btn btn-success w-25 d-block mx-auto m-2' onClick={handleSubmit}>get Internship</button>
      <div className="mt-5">
        <h4 className="text-center m-5">Previous Internships</h4>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Stipend</th>
                <th>Branch</th>
                <th>Starting Date</th>
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
  )
}
