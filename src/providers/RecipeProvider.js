import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../context/RecipeContext';

export default function RecipeProvider({ children }) {
  const [isCopyMeals, setIsCopyMeals] = useState(false);
  const [recipeDetailsMeals, setRecipeDetailsMeals] = useState([]);
  const [recommendMeals, setRecommendMeals] = useState([]);
  const [quantityMeals, setQuantityMeals] = useState([]);
  const [ingredientsMeals, setIngredientsMeals] = useState([]);

  const [isCopyDrinks, setIsCopyDrinks] = useState(false);
  const [recipeDetailsDrinks, setRecipeDetailsDrinks] = useState([]);
  const [recommendDrinks, setRecommendDrinks] = useState([]);
  const [quantityDrinks, setQuantityDrinks] = useState([]);
  const [ingredientsDrinks, setIngredientsDrinks] = useState([]);
  const [instructionsDrinks, setinstructionsDrinks] = useState('');

  const values = useMemo(() => ({
    isCopyMeals,
    setIsCopyMeals,
    recipeDetailsMeals,
    setRecipeDetailsMeals,
    recommendMeals,
    setRecommendMeals,
    quantityMeals,
    setQuantityMeals,
    ingredientsMeals,
    setIngredientsMeals,
    isCopyDrinks,
    setIsCopyDrinks,
    recipeDetailsDrinks,
    setRecipeDetailsDrinks,
    recommendDrinks,
    setRecommendDrinks,
    quantityDrinks,
    setQuantityDrinks,
    ingredientsDrinks,
    setIngredientsDrinks,
    instructionsDrinks,
    setinstructionsDrinks,
  }), [ingredientsMeals, quantityMeals, recipeDetailsMeals, isCopyMeals, recommendMeals,
    ingredientsDrinks, isCopyDrinks, quantityDrinks,
    recommendDrinks, recipeDetailsDrinks, instructionsDrinks]);

  return (
    <RecipeContext.Provider value={ values }>
      {children}
    </RecipeContext.Provider>
  );
}

RecipeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
