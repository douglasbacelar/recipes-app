import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function BtnDoneRecipe({ id,
  type, nationality, category,
  name, image, alcoholic, tags, isDisable }) {
  const history = useHistory();

  const getData = () => {
    const data = new Date();
    const dateString = data.toLocaleDateString();
    return dateString;
  };

  const handleClick = () => {
    const doneRecipe = {
      id,
      nationality: nationality || '',
      category,
      alcoholicOrNot: alcoholic || '',
      name,
      image,
      doneDate: getData(),
      tags: tags ? tags.split(',') : [],
      type: type === 'meals' ? 'meal' : 'drink',
    };
    const oneNegative = -1;

    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];

    const existingRecipeIndex = doneRecipesStorage
      .findIndex((recipe) => recipe.id === doneRecipe.id);

    if (existingRecipeIndex === oneNegative) {
      const allDoneRecipes = [...doneRecipesStorage, doneRecipe];
      localStorage.setItem('doneRecipes', JSON.stringify(allDoneRecipes));
    }

    history.push('/done-recipes');
  };

  return (
    <div className="flex justify-center">
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="bg-orange-500 text-white text-sm px-24 py-2 mt-4
        rounded-md hover:bg-orange-600 active:bg-orange-600 font-semibold"
        style={ { position: 'fixed', bottom: '0px' } }
        onClick={ () => handleClick() }
        disabled={ isDisable }
      >
        Finish Recipe
      </button>
    </div>
  );
}

BtnDoneRecipe.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isDisable: PropTypes.bool.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default BtnDoneRecipe;
