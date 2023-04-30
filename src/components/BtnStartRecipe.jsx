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
    <div className="flex justify-center">
      <button
        className="bg-orange-500 text-white text-sm mb-24 px-24 py-2
         rounded-md hover:bg-orange-600 active:bg-orange-600 font-semibold"
        onClick={ () => handleClickStartRecipe() }
        data-testid="start-recipe-btn"
        type="button"
        // className="btn btn-warning"
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
