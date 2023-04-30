import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ApiContext from '../context/ApiContext';

function FavBtn({ id,
  type, nationality, category,
  alcoholicOrNot, name, image }) {
  const { isFavorite, setIsFavorite } = useContext(ApiContext);
  const currentFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  const natGeo = nationality === undefined ? '' : nationality;
  const alcoholic = alcoholicOrNot === undefined ? '' : alcoholicOrNot;
  const newType = type === 'meals' ? 'meal' : 'drink';
  const newRecipe = {
    id,
    type: newType,
    nationality: natGeo,
    category,
    alcoholicOrNot: alcoholic,
    name,
    image,
  };

  const handleClickFavorite = () => {
    const index = currentFavorites.findIndex((favorite) => favorite.id === newRecipe.id);
    const oneNegative = -1;
    if (index !== oneNegative) {
      const filterEqual = currentFavorites
        .filter((favorite) => favorite.id !== newRecipe.id);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterEqual));
      setIsFavorite(false);
    } else {
      currentFavorites.push(newRecipe);
      localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavorites));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const validationFavorite = () => {
      const index = currentFavorites.findIndex((fav) => fav.id === newRecipe.id);
      const oneNegative = -1;
      if (index !== oneNegative) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    };
    validationFavorite();
  }, []);

  return (

    <button
      className="w-8"
      onClick={ () => handleClickFavorite() }
    >
      {
        isFavorite
          ? (
            <img
              src={ blackHeartIcon }
              alt="botão de compartilhar"
              data-testid="favorite-btn"
            />
          ) : (
            <img
              src={ whiteHeartIcon }
              alt="botão de compartilhar"
              data-testid="favorite-btn"
            />
          )
      }
    </button>

  );
}

FavBtn.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FavBtn;
