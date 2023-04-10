import React from 'react';
import PropTypes from 'prop-types';

function RecipeDetailsCard({ name, img, ingredients, category, video, instructions }) {
  return (
    <div>
      <img
        height={ 100 }
        width={ 100 }
        src={ img }
        alt={ name }
        data-testid="recipe-photo"
      />
      <h1 data-testid="recipe-title">
        {' '}
        {name}
        {' '}
      </h1>
      <div>
        {ingredients.map((ingredient, index) => (
          <div key={ index }>
            <p data-testid={ `${index}-ingredient-name-and-measure` }>
              {ingredient}
            </p>
          </div>
        ))}
      </div>
      <h1 data-testid="recipe-category">{category}</h1>
      <p data-testid="instructions">{instructions}</p>
      { video ? (
        <iframe
          data-testid="video"
          width="300"
          height="250"
          src={ `https://www.youtube.com/embed/${video.replace('https://www.youtube.com/watch?v=', '')}` }
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
           gyroscope; picture-in-picture"
          allowFullScreen
          title={ name }
        />
      ) : ''}
    </div>
  );
}

RecipeDetailsCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default RecipeDetailsCard;
