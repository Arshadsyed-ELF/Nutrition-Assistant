import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import {FaTrash}from 'react-icons/fa'
import { FaBeer } from "react-icons/fa";

const SuggestedNutrition = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
    axios
      .get(`http://localhost:9000/getsuggestion/${user.id}`)
      .then((response) => {
        setSuggestions(response.data);
        setIsLoading(false);

      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
        setIsLoading(false);

      });
    } else {
      console.log('ERROR');
    }
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:9000/suggestions');
  //       setSuggestions(response.data);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error('Failed to fetch suggestions:', error);
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []); 

  const deleteData = (taskId) => {
    axios.delete(`http://localhost:9000/suggestion/${taskId}`);
    window.location.assign('/suggested-nutrition');
    alert('plan is deleted');
  };

  return (
    <div style={{backgroundColor:"#b21b46"}}>
      <Unavbar />
      <div >
        <h1 className="text-center" style={{color:"black"}}>Diet Suggestions</h1>

        {isLoading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <ul className=" pb-5">
            {suggestions.map((suggestion,index) => (
              <li
                key={suggestion._id}
                className={`border p-4 rounded-lg shadow-md transition-transform transform   ${index !== 0 ? 'mt-5' : ''}`}
                style={{width:"97%",backgroundColor:"#ddb268"}}
              >
                <div className='pt-3' style={{ display: 'flex',alignItems:"center",backgroundColor:"black" ,color:"white"}}>
                  <p className="text-sm text-black-700 pl-5 pr-9">
                  <h5>Age: {suggestion.age}</h5> 
                  </p>
                  <p className="text-sm text-black-700 pr-9">
                    <h5>Height: {suggestion.height}</h5>
                  </p>
                  <p className="text-sm text-black-700">
                    <h5>Weight: {suggestion.weight}</h5>
                  </p>
                  <div style={{paddingLeft:"1000px",color:"red",cursor:"pointer"}}>
                  <p onClick={() => deleteData(suggestion._id)}><FaTrash/></p>
                  </div>
                
                </div>
                <br/>
                <p className="text-sm text-gray-700">
                  <strong>Timing:</strong> {suggestion.timing}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Calorie Intake:</strong> {suggestion.calorieIntake}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Walk:</strong> {suggestion.walk}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Carbohydrate Needs:</strong> {suggestion.carbohydrateNeeds}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>Protein Needs:</strong> {suggestion.proteinNeeds}
                </p>
                <p className="text-sm text-gray-700">
                  <strong>BMI:</strong> {suggestion.bmi}
                </p>
                <h3 >Suggestion:-    <div style={{color:"white"}}>{suggestion.suggestion}</div></h3>
                
              </li> 
              
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SuggestedNutrition;
