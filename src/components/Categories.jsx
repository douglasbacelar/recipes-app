import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';

function Categories({ categories, path }) {
  const { setCategory, fetchCategoty, category,
    setNameButton } = useContext(ApiContext);
  const btnClassUnselected = 'p-2 mr-1 rounded-md text-xs shadow-md';
  const btnClassSelected = `p-2 mr-1 rounded-md text-xs 
  shadow-md bg-orange-500 text-white -translate-y-3 font-bold`;

  const handleClickCategory = (choice) => {
    setNameButton(choice);
    if (category === choice) {
      setCategory('All');
    } else {
      setCategory(choice);
      fetchCategoty(path, choice);
    }
  };

  const sliceCategories = 5;
  return (
    <main className="font-sans">
      <div
        className="flex justify-between sticky top-0 py-3 px-2
          bg-white drop-shadow-md w-screen z-10"
      >
        <button
          className={ `${category === 'All'
            ? (btnClassSelected)
            : (btnClassUnselected)}` }
          data-testid="All-category-filter"
          onClick={ () => setCategory('All') }
        >
          All
        </button>
        {
          categories?.slice(0, sliceCategories).map((choice, index) => (
            <button
              className={ `${category === choice.strCategory
                ? (btnClassSelected)
                : (btnClassUnselected)}` }
              key={ index }
              data-testid={ `${choice.strCategory}-category-filter` }
              onClick={ () => handleClickCategory(choice.strCategory) }
            >
              {choice.strCategory}
            </button>
          ))
        }
      </div>
    </main>
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
