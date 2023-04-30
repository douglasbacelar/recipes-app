import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import HeaderContext from '../context/HeaderContext';
import { fetchFoodsAPI, fetchDrinksAPI } from '../services/FoodsAPI';

function SearchBar() {
  const {
    endPointAPI,
    setEndPointAPI,
    setTestAPI,
    nameT,
    setName,
  } = useContext(HeaderContext);
  const history = useHistory();

  const handleClick = async () => {
    const { pathname } = history.location;
    if (pathname === '/meals') {
      const returnAPI = await fetchFoodsAPI(endPointAPI, nameT);
      if (returnAPI !== 'alert' && returnAPI.meals.length === 1) {
        history.push(`/meals/${returnAPI.meals[0].idMeal}`);
      }
      setTestAPI(returnAPI.meals);
    } if (pathname === '/drinks') {
      const returnAPI = await fetchDrinksAPI(endPointAPI, nameT);
      if (returnAPI !== 'alert' && returnAPI.drinks.length === 1) {
        history.push(`/drinks/${returnAPI.drinks[0].idDrink}`);
      }
      setTestAPI(returnAPI.drinks);
    }
  };
  return (
    <form>
      <section className="flex">
        <div className="relative">
          <input
            className="py-1 px-2 text-sm text-orange-500 outline-orange-500
             bg-gray-50 rounded-md border border-gray-300
             focus:border-blue-500 text-center"
            type="text"
            data-testid="search-input"
            value={ nameT }
            onChange={ ({ target }) => setName(target.value) }
          />
          <button
            className="bg-orange-500 text-white text-sm
            px-3  py-1 rounded-md hover:bg-orange-600
            active:bg-orange-600 font-semibold ml-2 mt-2"
            type="button"
            data-testid="exec-search-btn"
            onClick={ handleClick }
          >
            Search
          </button>
        </div>
      </section>
      <div className="flex justify-between">

        <label htmlFor="ingredient">
          <input
            className="mr-1"
            name="radio"
            type="radio"
            id="ingredient"
            data-testid="ingredient-search-radio"
            value="ingredient"
            onClick={ ({ target }) => setEndPointAPI(target.value) }
          />
          Ingredient
        </label>

        <label htmlFor="name">
          <input
            className="mr-1"
            name="radio"
            type="radio"
            id="name"
            data-testid="name-search-radio"
            value="name"
            onClick={ ({ target }) => setEndPointAPI(target.value) }
          />
          Name
        </label>

        <label htmlFor="firstLetter">
          <input
            className="mr-1"
            name="radio"
            type="radio"
            id="firstLetter"
            data-testid="first-letter-search-radio"
            value="firstLetter"
            onClick={ ({ target }) => setEndPointAPI(target.value) }
          />
          First letter
        </label>
      </div>

    </form>

  );
}

export default SearchBar;
