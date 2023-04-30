import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import CheckboxIngredients from './Checkbox';
import FavBtn from './FavBtn';
import BtnDoneRecipe from './BtnDoneRecipe';
import ApiContext from '../context/ApiContext';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function RecipeInProgressCard({ name, image, category,
  tags,
  instructions, ingredients, id, type, nationality, alcoholicOrNot }) {
  const { isCopy, setIsCopy, selectedIngredients } = useContext(ApiContext);
  const isDisable = ingredients?.length === selectedIngredients?.length;
  const { pathname } = useLocation();
  const newPathname = pathname.replace('/in-progress', '');
  return (
    <div>
      <Link
        to="/meals"
      >
        <span
          className="material-symbols-outlined fixed
        text-gray-900 active:text-orange-600 mt-3 ml-3"
        >
          arrow_back
        </span>
      </Link>
      <div>

        {/* { isCopy && <h1 style={ pStyle }>Link copied!</h1> } */}
        <h3
          className="font-bold text-2xl text-center text-orange-500"
          data-testid="recipe-title"
        >
          {name}

        </h3>
        <img
          className="rounded-lg w-64 drop-shadow-lg m-auto"
          data-testid="recipe-photo"
          src={ image }
          alt={ name }
        />
        <div className="absolute top-72 left-10 pt-0 ml-3 pl-2 bg-white/50 w-48">
          <h4 className="text-xl pl-6" data-testid="recipe-category">{category}</h4>
        </div>
        <div className="flex flex-row border-b-4 mt-4 space-x-8">
          <button
            type="button"
            className="absolute top-14 left-24"
            data-testid="share-btn"
            onClick={ () => {
              copy(`http://localhost:3000${newPathname}`);
              setIsCopy(true);
            } }
          >
            <img src={ shareIcon } alt="botão de compartilhar" />
            { isCopy && <span>Link copied!</span> }
          </button>
          <div
            className="absolute top-14 right-24 w-8 material-symbols-outlined
                  text-orange-600"
          >
            <FavBtn
              id={ id }
              type={ type }
              nationality={ nationality }
              alcoholicOrNot={ alcoholicOrNot }
              category={ category }
              name={ name }
              image={ image }
            />

          </div>
        </div>

        <div className="ml-5 pl-3">
          <p
            className="text-lg font-semibold m-0 pt-3
          text-start text-orange-500"
          >
            Ingredients:

          </p>
          <CheckboxIngredients
            ingredients={ ingredients }
          />
        </div>
        <div className="border-y-4 mt-7 mb-4">
          <p
            className="text-lg font-semibold m-0 p-2 ml-5 pt-3
          text-start text-orange-500"
          >
            Details:
          </p>
          <p
            className=" px-2 mx-8 overflow-y-auto h-60"
            data-testid="instructions"
          >
            {instructions}
          </p>

        </div>
        <BtnDoneRecipe
          id={ id }
          type={ type }
          nationality={ nationality }
          alcoholicOrNot={ alcoholicOrNot }
          category={ category }
          name={ name }
          image={ image }
          isDisable={ !isDisable }
          tags={ tags }
        />
      </div>
    </div>

  );
}

RecipeInProgressCard
  .propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
    nationality: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default RecipeInProgressCard;
