import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DoneRecipe from './pages/DoneRecipe';
import Drinks from './pages/Drinks';
import FavoriteRecipe from './pages/FavoriteRecipe';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import RecipePage from './pages/RecipePage';
import RecipeInProgress from './pages/RecipeInProgress';

function Routes() {
  const mealsKeys = {
    img: 'strMealThumb',
    name: 'strMeal',
    url: 'https://www.themealdb.com/api/json/v1/1/search.php?s=',
  };

  const drinksKeys = {
    img: 'strDrinkThumb',
    name: 'strDrink',
    url: 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=',
  };

  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/meals/:id/in-progress" component={ RecipeInProgress } />
      <Route path="/drinks/:id/in-progress" component={ RecipeInProgress } />
      <Route
        path="/drinks/:id"
        render={
          (props) => (
            <RecipePage
              { ...props }
              path="thecocktaildb"
              type="drinks"
              typeKeysObj={ drinksKeys }
              carouselKey="meals"
              carouselObjKeys={ mealsKeys }
            />)
        }
      />
      <Route
        path="/meals/:id"
        render={
          (props) => (
            <RecipePage
              { ...props }
              path="themealdb"
              type="meals"
              typeKeysObj={ mealsKeys }
              carouselKey="drinks"
              carouselObjKeys={ drinksKeys }
            />)
        }
      />
      <Route path="/meals" component={ Meals } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipe } />
      <Route path="/favorite-recipes" component={ FavoriteRecipe } />
    </Switch>
  );
}

export default Routes;
