import React from 'react';
import Recipe from './Recipe';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import './RecipeApp.css';

function RecipeApp() { 
  return (
    <div className="App">
      <Navbar />
      <RecipeList />
      
    </div>
  );
}

export default RecipeApp;
 