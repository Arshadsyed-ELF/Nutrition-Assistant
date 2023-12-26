// NewSuggestion.js
import React, { useState } from 'react';
import axios from 'axios';

const NewSuggestion = () => {
  const [newSuggestion, setNewSuggestion] = useState({
    age: '',
    height: '',
    weight: '',
    suggestions: {},
    bmi: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewSuggestion((prevSuggestion) => ({
      ...prevSuggestion,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:9000/suggestions', newSuggestion);
      // Optionally, you can redirect or perform other actions after submission
    } catch (error) {
      console.error('Error submitting suggestion:', error);
    }
  };

  return (
    <div>
      <h2>Add New Suggestion</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="number" name="age" value={newSuggestion.age} onChange={handleInputChange} />
        </label>
        <label>
          Height:
          <input type="number" name="height" value={newSuggestion.height} onChange={handleInputChange} />
        </label>
        <label>
          Weight:
          <input type="number" name="weight" value={newSuggestion.weight} onChange={handleInputChange} />
        </label>
        {/* Add other input fields for suggestions, bmi, etc. */}
        <button type="submit">Submit Suggestion</button>
      </form>
    </div>
  );
};

export default NewSuggestion;
