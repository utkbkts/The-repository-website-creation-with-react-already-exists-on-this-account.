import React, { useState } from 'react';
import './input.css';

const Sectionfour = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      setErrorMessage('Please enter a valid email address');
    } else {
      setErrorMessage('');
      setInputValue('');
      alert("thank you",window.location.reload());
    }
    setTimeout(() => setErrorMessage(''), 2000);
  };

  return (
    <div>
      <div className='İnput'>
        <div className='input-clas'>
          <div className='input-card'>
            <h3>Get early access today</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
              esse fugiat magnam necessitatibus? Ad, ab fugit. Amet perspiciatis
              possimus minus!
            </p>
            <div className='input-card-title'>
              <form onSubmit={handleSubmit}>
                <div className='form'>
                  <input
                    type='email'
                    id='input'
                    value={inputValue}
                   onChange={(e)=>setInputValue(e.target.value)}
                  />
                  <p className='error'>{errorMessage}</p>
                </div>
                <div>
                  <button type='submit' className='btn-get'>
                    Get started For Free
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionfour;
