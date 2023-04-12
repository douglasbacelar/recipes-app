import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function BtnStartRecipe({ type, ingredients, id }) {
  const history = useHistory();
  const inProgressRecipes = JSON.parse(localStorage
    .getItem('inProgressRecipes')) || { meals: {}, drinks: {} };
  const [isInProgress, setIsInProgress] = useState(false);

  const handleClickStartRecipe = () => {
    inProgressRecipes[type][id] = ingredients;
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
    history.push(`/${type}/${id}/in-progress`);
  };

  useEffect(() => {
    if (id in inProgressRecipes[type]) {
      setIsInProgress(true);
    }
  }, []);

  return (
    <div>
      <button
        style={ { position: 'fixed', bottom: '0px' } }
        onClick={ () => handleClickStartRecipe() }
        data-testid="start-recipe-btn"
        type="button"
        className="btn btn-warning"
      >
        {
          isInProgress ? 'Continue Recipe' : 'Start Recipe'
        }
      </button>
    </div>
  );
}

BtnStartRecipe.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
};

export default BtnStartRecipe;
