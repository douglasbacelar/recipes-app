import React from 'react';

function SearchBar() {
  return (
    <div>
      <label>
        <input
          type="text"
          data-testid="search-input"
        />
      </label>
      <label htmlFor="ingredient">
        Ingredient
        <input
          type="radio"
          id="ingredient"
          data-testid="ingredient-search-radio"
        />
      </label>

      <label htmlFor="name">
        Name
        <input
          type="radio"
          id="name"
          data-testid="name-search-radio"
        />
      </label>

      <label htmlFor="firstLetter">
        First letter
        <input
          type="radio"
          id="firstLetter"
          data-testid="first-letter-search-radio"
        />
      </label>

      <button
        type="button"
        data-testid="exec-search-btn"
      >
        Search
      </button>
    </div>

  );
}

export default SearchBar;
