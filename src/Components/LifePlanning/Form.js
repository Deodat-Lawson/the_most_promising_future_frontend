import React, { useState } from 'react';
import './Form.css'; 
import axios from 'axios';

function Form() {


  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = () => {
    console.log(formData)
    axios.post('http://127.0.0.1:8000/gpt/', formData, {
      headers:{
        'Content-Type': 'application/json' 
      }
    })
    alert(`Form submitted! \nName: ${formData.name}\nEmail: ${formData.email}\nAge: ${formData.age}`);
  };

  return (
    <div className="form-container">
      <h2> Tell Me about Yourself</h2>
      
      {step === 1 && (
        <div className="form-step">
          


          <label>Name:</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Age:</label>
          <input 
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />

        </div>
      )}

      {step === 2 && (
        <div className="form-step">
          <label>Email:</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {step === 3 && (
        <div className="form-step">

        </div>
      )}

      {step === 4 && (
        <div className="form-step">
          <p>Form Complete!</p>
          <p>Thank you for filling out the form.</p>
        </div>
      )}

      <div className="buttons">
        {step > 1 && (
          <button onClick={prevStep} style={{ marginRight: '10px' }}>
            Previous
          </button>
        )}
        {step < 4 ? (
          <button onClick={nextStep}>
            Next
          </button>
        ) : (
          <button onClick={submitForm}>
            Submit
          </button>
        )}
      </div>

      {/* Optional snowflakes overlay */}
      <div className="snowflakes"></div>
    </div>
  );
}

export default Form;
