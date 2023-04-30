import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import RecipeDetails from '../components/RecipeDetails';
import ApiContext from '../context/ApiContext';
import Recommend from '../components/Recommend';
import BtnStartRecipe from '../components/BtnStartRecipe';

function RecipePage({ path, type, typeKeysObj, carouselKey, carouselObjKeys }) {
  const { recipeDetails,
    fetchRecipeDetails } = useContext(ApiContext);
  const { name, img } = typeKeysObj;
  const { id } = useParams();
  const [ingredientsAndMeasures, setingredientsAndMeasures] = useState([]);
  const [categoy, setCategory] = useState();

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

      {
        recipeDetails !== undefined && (
          <RecipeDetails
            type={ type }
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
        <p
          className="text-lg flex font-semibold m-0 pt-3 text-start
         text-orange-500 pl-14"
        >
          Recommended:
        </p>
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
