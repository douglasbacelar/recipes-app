import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../context/ApiContext';

function Categories() {
  const history = useHistory();
  const { setPathname, categories, setCategory, category } = useContext(ApiContext);
  const { pathname } = history.location;
  const sliceCategories = 5;

  useEffect(() => {
    setPathname(pathname);
  }, [setPathname, pathname]);

  // useEffect(() => {
  //   console.log(categories);
  // }, []);

  const handleClickCategory = (choice) => {
    if (category === choice) {
      setCategory('all');
    } else {
      setCategory(choice);
    }
  };

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

export default Categories;
