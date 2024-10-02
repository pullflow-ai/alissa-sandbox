import React, { useState } from 'react';

const SurveyForm = () => {
  const [age, setAge] = useState('');
  const [satisfaction, setSatisfaction] = useState();
  const [comments, setComments] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age === '' || satisfaction === '') {
      alert('Please fill out all fields');
    }
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Customer Satisfaction Survey</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <select value={satisfaction} onChange={(e) => setSatisfaction(e.target.value)}>
          <option value="">Rate your satisfaction</option>
          <option value="1">Very Unsatisfied</option>
          <option value="5">Very Satisfied</option>
        </select>
        <textarea
          placeholder="Additional comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && <p>Thank you for your feedback!</p>}
    </div>
  );
};

// No export statement
