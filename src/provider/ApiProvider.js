import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';

export default function ApiProvider({ children }) {
  const [initialRecipes, setInitialRecipes] = useState([]);
  const [categories, getCategories] = useState([]);
  const [category, setCategory] = useState('all');
  const [recipesFromCategoty, setRecipesFromCategory] = useState();
  const [recipeDetails, setRecipeDetails] = useState();
  const [isCopy, setIsCopy] = useState(false);
  const [recipeInprogress, setRecipeInprogress] = useState();

  const fetchInitialCards = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setInitialRecipes(data);
  };

  const fetchCategories = async (path) => {
    const url = `https://www.${path}.com/api/json/v1/1/list.php?c=list`;
    const response = await fetch(url);
    const data = await response.json();
    getCategories(data);
  };

  const fetchCategoty = async (path, cat) => {
    const url = `https://www.${path}.com/api/json/v1/1/filter.php?c=${cat}`;
    const response = await fetch(url);
    const data = await response.json();
    setRecipesFromCategory(data);
  };

  const fetchRecipeDetails = async (path, id, type) => {
    const url = (`https://www.${path}.com/api/json/v1/1/lookup.php?i=${id}`);
    const response = await fetch(url);
    const data = await response.json();
    setRecipeDetails(data[type][0]);
    setRecipeInprogress(data[type][0]);
  };

  const values = useMemo(() => ({
    fetchInitialCards,
    initialRecipes,
    categories,
    fetchCategories,
    category,
    setCategory,
    recipesFromCategoty,
    fetchCategoty,
    recipeDetails,
    fetchRecipeDetails,
    isCopy,
    setIsCopy,
    recipeInprogress,
  }), [initialRecipes,
    recipeInprogress, categories, category, recipesFromCategoty, recipeDetails, isCopy]);

  return (
    <ApiContext.Provider value={ values }>
      {children}
    </ApiContext.Provider>
  );
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
