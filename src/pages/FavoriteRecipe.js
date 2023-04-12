import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import ApiContext from '../context/ApiContext';
import FilterBtnFavorites from '../components/FilterBtnFavorites';

const copy = require('clipboard-copy');

function FavoriteRecipes() {
  const [favoriteRecipe, setFavoriteRecipe] = useState([]);
  const [copyFavorite, setcopyFavorite] = useState(false);
  const { isFavorite, setIsFavorite } = useContext(ApiContext);

  const handleClickFavorite = (recipeFav) => {
    const newFav = {
      id: recipeFav.id,
      type: recipeFav.type,
      nationality: recipeFav.nationality,
      category: recipeFav.category,
      alcoholicOrNot: recipeFav.alcoholicOrNot,
      name: recipeFav.name,
      image: recipeFav.image,
    };
    const currentFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const index = currentFavorites.findIndex((favorite) => favorite.id === newFav.id);
    const oneNegative = -1;
    console.log('index', index);
    if (index !== oneNegative) {
      const filterEqual = currentFavorites
        .filter((favorite) => favorite.id !== newFav.id);
      setFavoriteRecipe(filterEqual);
      localStorage.setItem('favoriteRecipes', JSON.stringify(filterEqual));
      setIsFavorite(false);
    } else {
      currentFavorites.push(newFav);
      localStorage.setItem('favoriteRecipes', JSON.stringify(currentFavorites));
      setIsFavorite(true);
    }
  };

  useEffect(() => {
    const getFavoriteRecipe = () => {
      const currentFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
      setFavoriteRecipe(currentFavorites);
    };
    getFavoriteRecipe();
  }, []);

  return (
    <div>
      <Header title="Favorite Recipes" />
      FavoriteRecipe

      <div
        className="ingredientsAndMeasures"
      >
        <FilterBtnFavorites
          filterFavorite={ favoriteRecipe }
          setFilterFavorite={ setFavoriteRecipe }
        />
        { copyFavorite && <h1>Link copied!</h1> }
        {
          favoriteRecipe.map((recipeFav, index) => (
            <div
              key={ recipeFav.id }
            >
              <Link
                to={ `/${recipeFav.type}s/${recipeFav.id}` }
              >
                <span
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {recipeFav.alcoholicOrNot}
                  {`${recipeFav.nationality} - ${recipeFav.category}`}
                </span>
                <span
                  data-testid={ `${index}-horizontal-name` }
                >
                  {recipeFav.name}
                </span>
                <img
                  src={ recipeFav.image }
                  alt={ recipeFav.name }
                  width="150px"
                  data-testid={ `${index}-horizontal-image` }
                />
              </Link>
              {recipeFav.type === 'meal' ? (
                <button
                  onClick={ () => {
                    copy(`http://localhost:3000/${recipeFav.type}s/${recipeFav.id}`);
                    setcopyFavorite(true);
                  } }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="botão de compartilhar"
                  />
                </button>
              ) : (
                <button
                  onClick={ () => {
                    copy(`http://localhost:3000/${recipeFav.type}/${recipeFav.id}`);
                    setcopyFavorite(true);
                  } }
                >
                  <img
                    data-testid={ `${index}-horizontal-share-btn` }
                    src={ shareIcon }
                    alt="botão de compartilhar"
                  />
                </button>
              )}

              <button
                type="button"
                onClick={ () => handleClickFavorite(recipeFav) }
              >
                <img
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ !isFavorite ? blackHeartIcon : whiteHeartIcon }
                  alt="Botão de favorito"
                  id={ recipeFav.id }
                />
              </button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default FavoriteRecipes;
