import React from 'react';
import Header from '../components/Header';
import BtnFilterDoneRecipe from '../components/BtnFilterDoneRecipe';
import DoneRecipeCards from '../components/DoneRecipeCards';

function DoneRecipe() {
  return (
    <div>
      <Header title="Done Recipes" />
      <BtnFilterDoneRecipe />
      <DoneRecipeCards />
    </div>
  );
}

export default DoneRecipe;
