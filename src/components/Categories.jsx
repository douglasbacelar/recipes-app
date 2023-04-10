import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';

function Categories({ categories, path }) {
  const { setCategory, fetchCategoty, category } = useContext(ApiContext);

  const handleClickCategory = (choice) => {
    if (category === choice) {
      setCategory('all');
    } else {
      setCategory(choice);
      fetchCategoty(path, choice);
    }
  };

  const sliceCategories = 5;
  return (
    <div>
      {
        categories?.slice(0, sliceCategories).map((choice, index) => (
          <button
            key={ index }
            data-testid={ `${choice.strCategory}-category-filter` }
            onClick={ () => handleClickCategory(choice.strCategory) }
          >
            {choice.strCategory}
          </button>
        ))
      }
      <button
        data-testid="All-category-filter"
        onClick={ () => setCategory('all') }
      >
        All
      </button>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      strCategory: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default Categories;
