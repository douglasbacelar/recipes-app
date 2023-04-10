import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeDetailsCard from '../components/RecipeDetailsCard';
import ApiContext from '../context/ApiContext';
import Recommend from '../components/Recommend';
import BtnStartRecipe from '../components/BtnStartRecipe';
import ShareBtn from '../components/ShareBtn';
import FavBtn from '../components/FavBtn';

function RecipePage({ path, type, typeKeysObj, carouselKey, carouselObjKeys }) {
  const { recipeDetails,
    fetchRecipeDetails, isCopy } = useContext(ApiContext);
  const { name, img } = typeKeysObj;
  const { id } = useParams();
  const [ingredientsAndMeasures, setingredientsAndMeasures] = useState([]);
  const [categoy, setCategory] = useState();

  const pStyle = {
    margin: '0px',
    paddingBottom: '25px',
  };

  useEffect(() => {
    fetchRecipeDetails(path, id, type);
  }, []);

  useEffect(() => {
    if (recipeDetails) {
      const ingredientsFiltered = Object.entries(recipeDetails)
        .filter((detail) => detail[0].includes('Ingredient')
          && detail[1] !== ''
          && detail[1] !== null);
      const measuresFilter = Object.entries(recipeDetails)
        .filter((detail) => detail[0].includes('Measure')
          && detail[1] !== ' '
          && detail[1] !== null);
      const measuresValues = measuresFilter.map((measure) => measure[1]);
      const ingredientsMeasures = [];
      ingredientsFiltered.forEach((ingredient, i) => {
        ingredientsMeasures.push(`${measuresValues[i]} ${ingredient[1]}`);
        const whichCategory = type === 'meals'
          ? recipeDetails.strCategory : recipeDetails.strAlcoholic;
        setCategory(whichCategory);
      });
      setingredientsAndMeasures(ingredientsMeasures);
    }
  }, [recipeDetails]);

  return (
    <div>
      { isCopy && <h1 style={ pStyle }>Link copied!</h1> }
      {
        recipeDetails !== undefined && (
          <RecipeDetailsCard
            name={ recipeDetails[name] }
            img={ recipeDetails[img] }
            ingredients={ ingredientsAndMeasures }
            category={ categoy }
            video={ recipeDetails.strYoutube }
            instructions={ recipeDetails.strInstructions }
          />
        )
      }
      <div>
        <Recommend
          carouselKey={ carouselKey }
          carouselObjKeys={ carouselObjKeys }
        />
      </div>
      <div>
        <BtnStartRecipe
          type={ type }
          ingredients={ ingredientsAndMeasures }
          id={ id }
        />
        <ShareBtn />
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
              ingredients={ ingredientsAndMeasures }
            />
          )
        }
      </div>
    </div>
  );
}

RecipePage.propTypes = {
  path: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  carouselKey: PropTypes.string.isRequired,
  typeKeysObj: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  carouselObjKeys: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipePage;
