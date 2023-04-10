import React from 'react';

function RecipeDetails() {
  return (
    <div>
      { testAPI
        ? (
          testAPI.slice(0, sliceList).map((element, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strMealThumb }
                width={ 200 }
                alt={ element }
              />
              <p data-testid={ `${index}-card-name` }>{element.strMeal}</p>
            </div>
          ))
        ) : ''}
    </div>
  );
}

export default RecipeDetails;
