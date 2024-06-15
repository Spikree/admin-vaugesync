import './FormData.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FormData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/forms')
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching form data:', error);
      });
  }, []);

  return (
    <div className='form-data-main'>
      <h1><span className='form'>Form</span> Data</h1>
      <table border="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Service</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((form, index) => (
            <tr key={index}>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.service}</td>
              <td>{form.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormData;
