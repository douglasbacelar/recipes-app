import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import { fetchFoodsAPI, fetchDrinksAPI } from '../services/FoodsAPI';

function SearchBar() {
  const { endPointAPI, setEndPointAPI,
    setTestAPI, setIsSearchAPI } = useContext(HeaderContext);
  const history = useHistory();
  const [name, setName] = useState('');

  const handleClick = async () => {
    const { pathname } = history.location;
    if (pathname === '/meals') {
      const returnAPI = await fetchFoodsAPI(endPointAPI, name);
      console.log(returnAPI);
      if (returnAPI !== 'alert' && returnAPI.meals.length === 1) {
        history.push(`/meals/${returnAPI.meals[0].idMeal}`);
        setIsSearchAPI(true);
      }
      setTestAPI(returnAPI.meals);
    } if (pathname === '/drinks') {
      const returnAPI = await fetchDrinksAPI(endPointAPI, name);
      console.log(returnAPI);
      if (returnAPI !== 'alert' && returnAPI.drinks.length === 1) {
        history.push(`/drinks/${returnAPI.drinks[0].idDrink}`);
        setIsSearchAPI(true);
      }
      setTestAPI(returnAPI.drinks);
    }
  };

  return (
    <div>
      <label>
        <input
          type="text"
          data-testid="search-input"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label htmlFor="ingredient">
        Ingredient
        <input
          name="radio"
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
          value="ingredient"
          onClick={ ({ target }) => setEndPointAPI(target.value) }
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          name="radio"
          type="radio"
          id="name"
          data-testid="name-search-radio"
          value="name"
          onClick={ ({ target }) => setEndPointAPI(target.value) }
        />
      </label>

      <label htmlFor="firstLetter">
        First letter
        <input
          name="radio"
          type="radio"
          id="firstLetter"
          data-testid="first-letter-search-radio"
          value="firstLetter"
          onClick={ ({ target }) => setEndPointAPI(target.value) }
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ handleClick }
      >
        Search
      </button>
    </div>

  );
}

export default SearchBar;
