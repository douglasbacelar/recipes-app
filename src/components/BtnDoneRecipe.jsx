import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function BtnDoneRecipe({ id,
  type, nationality, category,
  name, image, alcoholic, tags }) {
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
    const doneRecipesStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    if (doneRecipesStorage) {
      const allDoneRecipes = [...doneRecipesStorage, doneRecipe];
      localStorage.setItem('doneRecipes', JSON.stringify(allDoneRecipes));
    } else {
      localStorage.setItem('doneRecipes', JSON.stringify([doneRecipe]));
    }

    history.push('/done-recipes');
  };

  return (
    <div>
      <button
        type="button"
        data-testid="finish-recipe-btn"
        className="btn btn-warning btn-sm"
        style={ { position: 'fixed', bottom: '0px' } }
        onClick={ () => handleClick() }
      >
        Finish Recipe
      </button>
    </div>
  );
}

BtnDoneRecipe.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alcoholic: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default BtnDoneRecipe;
