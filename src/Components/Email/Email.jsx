import React, { useState } from 'react';
import './Email.css';

const Email = () => {
  const [formData, setFormData] = useState({
    name: '', 
    email: '',
    number: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/pathakchinmay02@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form data submitted successfully.');
        // You can handle success here, e.g., show a success message or redirect the user.
      } else {
        console.error('Form data submission failed.');
        // You can handle errors here, e.g., display an error message.
      }
    } catch (error) {
      console.error('An error occurred while submitting the form:', error);
    }

    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
    });
  };

  return (
    <div className="main_container">
       <div className=''>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white align-items :center '>Contact Us</h1>
      <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
       Name
      </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          placeholder="Name"
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
       Email
      </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
       Number
      </label>
      </label>
         <input
          type="phone"
          name="number"
          value={formData.number}
          onChange={handleInputChange}
          required
          placeholder="Number"
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
        />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Send</button>
      </form>
      </div>
    </div>
  );
};

export default Email;
