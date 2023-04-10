import React from 'react';
import PropTypes from 'prop-types';

function SearchCard({ name, image, index }) {
  return (
    <div>
      <img
        data-testid={ `${index}-card-img` }
        src={ image }
        width={ 200 }
        alt={ name }
        id="teste-teste2"
      />
      <p
        data-testid={ `${index}-card-name` }
        id="teste-teste3"
      >
        {name}
      </p>
    </div>
  );
}

SearchCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default SearchCard;
