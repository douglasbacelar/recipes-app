import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import MealsRecipe from './pages/MealsRecipe';
import MealsProgress from './pages/MealsProgress';
import Drinks from './pages/Drinks';
import DrinksRecipe from './pages/DrinksRecipe';
import DrinksProgress from './pages/DrinksProgress';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavRecepies from './pages/FavRecepies';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/meals" component={ Meals } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/drinks/:id-da-receita" component={ DrinksRecipe } />
      <Route path="/meals/:id-da-receita" component={ MealsRecipe } />
      <Route path="/meals/:id-da-receita/in-progress" component={ MealsProgress } />
      <Route path="/drinks/:id-da-receita/in-progress" component={ DrinksProgress } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavRecepies } />
    </Switch>
  );
}

export default Routes;
