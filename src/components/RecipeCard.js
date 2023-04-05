import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function RecipeCard({ index, recipe, pathname }) {
  const { strMeal, strDrink, strMealThumb, strDrinkThumb, idMeal, idDrink } = recipe;
  const history = useHistory();

  const handleClick = (id) => {
    if (pathname === '/meals') {
      history.push(`/meals/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <button
      data-testid={ `${index}-recipe-card` }
      onClick={ () => handleClick(pathname === '/meals' ? idMeal : idDrink) }
    >
      <h1 data-testid={ `${index}-card-name` }>
        {pathname === '/meals' ? strMeal : strDrink}
      </h1>
      <h1 data-testid={ `${index}-card-name` }>
        {pathname === '/meals' ? idMeal : idDrink}
      </h1>
      <img
        data-testid={ `${index}-card-img` }
        src={ pathname === '/meals' ? strMealThumb : strDrinkThumb }
        alt={ pathname === '/meals' ? strMeal : strDrink }
      />
    </button>
  );
}

RecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    strMeal: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strMealThumb: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
    idMeal: PropTypes.string.isRequired,
    idDrink: PropTypes.string.isRequired,
  }).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default RecipeCard;
