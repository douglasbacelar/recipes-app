import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import RecipeCard from './RecipeCard';

function Recipes() {
  const { setPathname,
    initialRecipes, recipesByCategory, category } = useContext(ApiContext);
  const history = useHistory();
  const sliceCards = 12;
  const { pathname } = history.location;

  useEffect(() => {
    setPathname(pathname);
    console.log(recipesByCategory);
  }, [setPathname, pathname, recipesByCategory]);

  return (
    <div>
      <button onClick={ () => console.log(recipesByCategory) }>test</button>
      {category === 'all' ? (
        initialRecipes?.slice(0, sliceCards).map((recipe, index) => (
          <RecipeCard
            key={ index }
            index={ index }
            recipe={ recipe }
            pathname={ pathname }
          />
        ))
      ) : (
        recipesByCategory?.slice(0, sliceCards).map((recipe, index) => (
          <RecipeCard
            key={ index }
            index={ index }
            recipe={ recipe }
            pathname={ pathname }
          />
        ))
      )}
    </div>
  );
}

export default Recipes;
