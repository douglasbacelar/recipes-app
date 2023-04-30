import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import ShareBtn from './ShareBtn';
import FavBtn from './FavBtn';

function RecipeDetails({ name, img, type, ingredients, category, video, instructions }) {
  const { recipeDetails,
  } = useContext(ApiContext);
  const { id } = useParams();
  return (
    <div className="font-sans flex flex-column">
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
      <h2
        className="font-bold text-2xl text-center text-orange-500 mt-10"
        data-testid="recipe-title"
      >
        {name}
      </h2>
      <section>
        <section className="flex justify-center">
          <img
            className="rounded-lg w-64 drop-shadow-lg"
            src={ img }
            alt={ name }
            data-testid="recipe-photo"
          />
        </section>
        <div
          className="absolute top-24 left-16 pb-4"
        >
          <ShareBtn />
        </div>
        <div className="absolute top-24 left-64 pt-2 pl-2">
          {
            recipeDetails !== undefined && (
              <FavBtn
                id={ id }
                type={ type }
                nationality={ recipeDetails.strArea }
                category={ recipeDetails.strCategory }
                alcoholicOrNot={ recipeDetails.strAlcoholic }
                name={ recipeDetails[name] }
                image={ recipeDetails[img] }
                ingredients={ ingredients }
              />
            )
          }

        </div>
        <div className="absolute top-72 left-10 pt-0 ml-3 pl-2 bg-white/50 w-48">
          <h4 className="text-xl pl-6" data-testid="recipe-category">{category}</h4>
        </div>
      </section>

      <section className="flex flex-column px-14 border-y-2 mt-4">
        <p
          className="text-lg font-semibold m-0 pt-3
          text-start text-orange-500"
        >
          Ingredients:
        </p>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              <p>
                {`🔸 ${ingredient}`}
              </p>
            </li>
          ))}

        </ul>
      </section>
      <section className="flex flex-column  px-14">
        <p
          className="text-lg font-semibold m-0 pt-3
        text-start text-orange-500"
        >
          Details:
        </p>
        <p
          className="overflow-y-auto h-60 mb-2"
          data-testid="instructions"
        >
          {instructions}
        </p>
      </section>

      { video ? (
        <iframe
          data-testid="video"
          className="w-64 mx-14 mb-8 drop-shadow-lg rounded-md"
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

RecipeDetails.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  instructions: PropTypes.string.isRequired,
};

export default RecipeDetails;
