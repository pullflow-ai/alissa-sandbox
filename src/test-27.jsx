import React, { useState } from 'react';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedback === '') {
      alert('Feedback cannot be empty');
    }
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback"
        />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <p>Thank you for your feedback!</p>
      )}
    </div>
  );
};

// No export statement
