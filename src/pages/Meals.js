import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import SearchCard from '../components/SearchCard';
import ApiContext from '../context/ApiContext';
import HeaderContext from '../context/HeaderContext';

function Meals() {
  const { testAPI } = useContext(HeaderContext);
  const { fetchInitialCards, initialRecipes, categories,
    fetchCategories, category, recipesFromCategoty } = useContext(ApiContext);
  const sliceList = 12;

  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const mealsKeys = {
    id: 'idMeal',
    str: 'strMeal',
    thumb: 'strMealThumb',
    path: 'meals',
  };

  const path = 'themealdb';

  useEffect(() => {
    fetchInitialCards(url);
    fetchCategories(path);
  }, []);

  const ternary = category === 'all' ? (
    <Recipes food={ initialRecipes.meals } type={ mealsKeys } />
  ) : (
    <Recipes food={ recipesFromCategoty?.meals } type={ mealsKeys } />
  );

  return (
    <div>
      <Header title="Meals" />
      <Categories categories={ categories.meals } path={ path } />
      {
        testAPI?.length > 0 ? (
          testAPI.slice(0, sliceList).map((recipe, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              id="teste-teste"
            >
              <SearchCard
                name={ recipe.strMeal }
                image={ recipe.strMealThumb }
                index={ index }
              />
            </div>
          ))
        ) : (
          ternary
        )
      }
      <Footer />
    </div>
  );
}

export default Meals;
