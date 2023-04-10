import React, { useContext, useEffect } from 'react';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import SearchCard from '../components/SearchCard';
import ApiContext from '../context/ApiContext';
import HeaderContext from '../context/HeaderContext';

function Drinks() {
  const { testAPI } = useContext(HeaderContext);
  const { fetchInitialCards, initialRecipes, categories,
    fetchCategories, recipesFromCategoty, category } = useContext(ApiContext);
  const sliceList = 12;

  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const drinksKeys = {
    id: 'idDrink',
    str: 'strDrink',
    thumb: 'strDrinkThumb',
    path: 'drinks',
  };

  const path = 'thecocktaildb';

  useEffect(() => {
    fetchInitialCards(url);
    fetchCategories(path);
  }, []);

  const ternary = category === 'all' ? (
    <Recipes food={ initialRecipes?.drinks } type={ drinksKeys } />
  ) : (
    <Recipes food={ recipesFromCategoty?.drinks } type={ drinksKeys } />
  );

  return (
    <div>
      <Header title="Drinks" />
      <Categories categories={ categories.drinks } path={ path } />
      {
        testAPI?.length > 0 ? (
          testAPI.slice(0, sliceList).map((recipe, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              id="teste-teste"
            >
              <SearchCard
                name={ recipe.strDrink }
                image={ recipe.strDrinkThumb }
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

export default Drinks;
