import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';

function CheckboxIngredients({ ingredients, id }) {
  const { selectedIngredients,
    setSelectedIngredients } = useContext(ApiContext);

  useEffect(() => {
    const savedRecipes = localStorage.getItem('savedRecipes');
    if (savedRecipes) {
      const recipes = JSON.parse(savedRecipes);
      const recipe = recipes.find((r) => r.id === id);
      if (recipe) {
        setSelectedIngredients(recipe.ingredients);
      }
    }
  }, [id]);

  const handleCheckboxChange = ({ target: { value, checked } }) => {
    const ingredient = value;
    const isChecked = checked;
    if (isChecked) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    } else {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    }
  };

  useEffect(() => {
    const savedRecipes = localStorage.getItem('savedRecipes');
    const IsSave = savedRecipes ? JSON.parse(savedRecipes) : [];
    const recipeIndex = IsSave.findIndex((r) => r.id === id);
    const oneNegative = -1;
    if (recipeIndex === oneNegative) {
      IsSave.push({ id, ingredients: selectedIngredients });
    } else {
      IsSave[recipeIndex].ingredients = selectedIngredients;
    }
    localStorage.setItem('savedRecipes', JSON.stringify(IsSave));
  }, [id, selectedIngredients]);

  return (
    <div>
      {
        ingredients?.length === selectedIngredients?.length && (
          <span
            className="flex justify-center"
          >
            Enjoy!
          </span>)
      }
      {ingredients?.map((ingredient, index) => (
        <label
          key={ index }
          htmlFor={ index }
          data-testid={ `${index}-ingredient-step` }
          className="flex h-4 space-x-2"
          style={ { textDecoration: selectedIngredients.includes(ingredient) ? (
            'line-through solid rgb(0, 0, 0)') : 'none' } }
        >
          <input
            className="h-6 accent-orange-600 "
            type="checkbox"
            id={ index }
            value={ ingredient }
            onChange={ handleCheckboxChange }
            checked={ selectedIngredients.includes(ingredient) }
          />
          {ingredient}
        </label>
      ))}

    </div>
  );
}

CheckboxIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
};

export default CheckboxIngredients;
