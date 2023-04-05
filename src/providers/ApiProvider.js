import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';

export default function ApiProvider({ children }) {
  const [pathname, setPathname] = useState('Meals');
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [categories, getCategories] = useState([]);
  const [category, setCategory] = useState('all');
  const [recipesByCategory, setRecipesByCategory] = useState([]);

  useEffect(() => {
    const fetchInitialCards = async () => {
      if (pathname === '/meals') {
        const URLMeals = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
        const responseMeals = await fetch(URLMeals);
        const dataMeals = await responseMeals.json();
        setInitialRecipes(dataMeals.meals);
      } else if (pathname === '/drinks') {
        const URLDrink = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
        const responseDrink = await fetch(URLDrink);
        const dataDrink = await responseDrink.json();
        setInitialRecipes(dataDrink.drinks);
      }
    };
    const fetchCategories = async () => {
      if (pathname === '/meals') {
        const URLMeals = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
        const responseMeals = await fetch(URLMeals);
        const dataMeals = await responseMeals.json();
        getCategories(dataMeals.meals);
      } else if (pathname === '/drinks') {
        const URLDrink = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const responseDrink = await fetch(URLDrink);
        const dataDrink = await responseDrink.json();
        getCategories(dataDrink.drinks);
      }
    };
    fetchCategories();
    fetchInitialCards();
  }, [pathname]);

  useEffect(() => {
    const fetchCategoty = async () => {
      if (pathname === '/meals' && category !== 'all') {
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await fetch(url);
        const data = await response.json();
        setRecipesByCategory(data.meals);
      } else if (pathname === '/drinks' && category !== 'all') {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
        const response = await fetch(url);
        const data = await response.json();
        setRecipesByCategory(data.drinks);
      }
    };
    fetchCategoty();
  }, [pathname, category]);

  const values = useMemo(() => ({
    setPathname,
    initialRecipes,
    categories,
    setCategory,
    category,
    recipesByCategory,
  }), [initialRecipes, categories, category, recipesByCategory]);

  return (
    <ApiContext.Provider value={ values }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
