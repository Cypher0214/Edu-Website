import { useState } from 'react';
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
      number: '',
    });
  };

  return (
    <div className="main_container_email">
       <div>
          <h1 className='mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
            text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl pt-10 lg:text-6xl dark:text-white justify-center flex items-center '>
          {/* <h1> */}
            Contact Us
          </h1>
            <div className="form_container">
            {/* <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}> */}
            <form className="form_main" onSubmit={handleSubmit}>
              <div className="w-5/6">
                <label className="label_tag block w-5/6 text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Name"
                className='input_tag shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              />
              <div className="w-5/6">
                <label className="label_tag block text-gray-700 text-sm font-bold mt-2 mb-2" htmlFor="email">
                  Email
                </label>
              </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className='input_tag shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
            {/* <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> */}
            <div className="w-5/6">
              <label className="label_tag block text-gray-700 text-sm font-bold mt-2 mb-2" htmlFor="number">
                Number
              </label>
            </div>
            {/* </label> */}
            <input
              type="phone"
              name="number"   
              value={formData.number}
              onChange={handleInputChange}
              required
              placeholder="Number"
              className='input_tag shadow appearance-none border rounded w-5/6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
            <button className='submit_button mt-4 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
