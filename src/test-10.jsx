import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    // Error: incorrect spread of formData (missing square brackets)
    setFormData({
      ...formData,
      e.target.name: e.target.value, // This will cause a syntax error
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert('Name and email are required!');
    }

    // Missing return statement, causing form to submit even when inputs are invalid
    setIsSubmitted(true);
  };

  // Incorrect use of conditional rendering, 'isSubmitted' won't be reset after submission
  return (
    <div>
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <p>Thank you for your message, {formData.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

// Missing default export
