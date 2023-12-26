import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes, Route, Link,} from 'react-router-dom';
import UserData from './components/UserData';
import SuggestedNutrition from './components/SuggestedNutrition';
import Newplan from './components/Newplan';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <div className="App">
       
        
        <Routes>
          <Route path="/"  element={<UserData/>}/>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signup"  element={<Signup/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/suggestion' element={<Newplan/>}/>
          <Route path="/suggested-nutrition" element={<SuggestedNutrition/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
