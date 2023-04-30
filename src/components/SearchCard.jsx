import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function SearchCard({ name, image, index, id }) {
  const history = useHistory();
  const { location } = history;
  return (
    <div className="my-6 z-0">
      <button
        className="my-6 z-0"
        data-testid={ `${index}-recipe-card` }
        onClick={ () => history.push(`${location.pathname}/${id}`) }
      >
        <img
          className="rounded-md  w-36"
          data-testid={ `${index}-card-img` }
          src={ image }
          alt={ name }
        />
        <div
          className="absolute bottom-2 bg-white/75 w-36 pb-4
                  flex flex-column"
        >
          <span
            data-testid={ `${index}-card-name` }
            className="font-bold text-stone-800 pl-2"
          >
            {name}
          </span>

        </div>
      </button>
    </div>
  );
}

SearchCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default SearchCard;
