import React from 'react'
import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'
import GridSlider from './components/GridSlider'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Route path='/' exact component={Landing} />
      <Route path='/Login' exact component={Login} />
      <Route path='/GridSlider' exact component={GridSlider}/>
        
          
    </Router>
   
  );
}

export default App;
