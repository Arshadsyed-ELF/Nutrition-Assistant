import React, { useState, useEffect } from 'react';
import { useHistory ,Link,useParams,useNavigate} from 'react-router-dom';
import { FormGroup, FormControl, Validators } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import './suggestion.css'
import Unavbar from './Unavbar';

const Newplan= () => {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState({});
  const [nutritionForm, setNutritionForm] = useState({
    age: '',
    height: '',
    weight: '',
  });
  const { id } = useParams();
  const navigate=useNavigate()

//   const history = useHistory();

//   useEffect(() => {
//     const token = localStorage.getItem('jwtToken');
//     if (!token) {
//       history.push('/login');
//     }
//   }, [history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNutritionForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nutritionForm.age && nutritionForm.height && nutritionForm.weight) {
      getSuggestions();
      setNutritionForm({
        age: '',
        height: '',
        weight: '',
      });
    }
  };

  const getSuggestions = async () => {
    try {
      setIsLoading(true);

      const { age, height, weight } = nutritionForm;

      const response = await axios.get('http://localhost:9000/suggest-nutrition', {
        params: {
          age,
          height,
          weight,
        },
      });

      setSuggestions(response.data.suggestedNutrition);
      const userid = JSON.parse(localStorage.getItem('user')).id;
      const username = JSON.parse(localStorage.getItem('user')).name;

      const postBody = {
        
        userId: userid,
        userName:username,
        age,
        height,
        weight,
        suggestions: response.data.suggestedNutrition,
        bmi: response.data.bmi,
      };

      await axios.post('http://localhost:9000/newplan', postBody);

      setIsLoading(false);
      alert("Your diet Plan is created")
      navigate('/suggested-nutrition')
    } catch (error) {
      console.error('Failed to fetch suggestions:', error);
      setIsLoading(false);
    }
  };

  return (
    <div>

    <Unavbar/>
    <div className="main-form-container">
      <div className="form-container">
        <div className="description">
          <h2 style={{color:"brown"}}>Enter Your Details to Get Personalized Diet Suggestions</h2>
          <p style={{color:"#000"}}>
            Fill in the form with your age, height, and weight to receive customized diet recommendations tailored to your
            needs. Our advanced nutrition algorithm will analyze your information and provide you with a personalized
            diet plan to help you achieve your health and wellness goals.
          </p>
          <p style={{color:"#000"}}>
            Please ensure that you enter accurate details for accurate results. Consult with a healthcare professional
            before making any significant changes to your diet or exercise routine.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="age">Age:</label>
            <input
              placeholder="Ex:-20"
              type="number"
              id="age"
              name="age"
              value={nutritionForm.age}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="height">Height (cm):</label>
            <input
              placeholder="Ex:-170"
              type="number"
              id="height"
              name="height"
              value={nutritionForm.height}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="weight">Weight (kg):</label>
            <input
              placeholder="Ex:-60"
              type="number"
              id="weight"
              name="weight"
              value={nutritionForm.weight}
              onChange={handleChange}
              required
            />
          </div>

          <Button type="submit" className="mt-4 p-3" style={{ borderRadius: '40px',color:"white" }} disabled={isLoading}>
            Get Diet Suggestions
          </Button>
          <br/>
          <br/>
          
         <div className='ff'>
          <Link to="/"  style={{textDecoration:"none",color:"white"}}>
            Back to Home
          </Link>
          </div>
         
        </form>
      </div>
      <div className="diet-suggestions" style={{ display: isLoading ? 'block' : 'none' }}>
        <h1 style={{ fontWeight: 'bold' }}>Diet Suggestions</h1>
        <div style={{ display: suggestions ? 'block' : 'none' }}>
          <p>
            <strong>Suggestion:</strong> {suggestions.suggestion}
          </p>
          <p>
            <strong>Timing:</strong> {suggestions.timing}
          </p>
          <p>
            <strong>Calorie Intake:</strong> {suggestions.calorieIntake}
          </p>
          <p>
            <strong>Weight Gain:</strong> {suggestions.weightGain}
          </p>
          <p>
            <strong>Carbohydrate Needs:</strong> {suggestions.carbohydrateNeeds}
          </p>
          <p>
            <strong>Protien Needs:</strong> {suggestions.proteinNeeds}
          </p>
          <h4>Recommended Foods:</h4>
          <ul>
            {suggestions.foods &&
              suggestions.foods.map((food, index) => (
                <li key={index}>
                  {food.name} - {food.grams}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Newplan;
