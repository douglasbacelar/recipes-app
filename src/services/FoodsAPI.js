const noSearch = 'Sorry, we haven\'t found any recipes for these filters.';

export const fetchFoodsAPI = async (endPointAPI, searchTerm) => {
  const invalidTerm = 'Search term not entered';
  if (endPointAPI === 'firstLetter') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    } if (searchTerm.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchTerm}`);
    const data = await resultsFood.json();
    return data;
  }
  if (endPointAPI === 'ingredient') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`);
    const data = await resultsFood.json();
    if (data.meals === null) {
      global.alert(noSearch);
      return 'alert';
    }
    return data;
  }
  if (endPointAPI === 'name') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await resultsFood.json();
    if (data.meals === null) {
      global.alert(noSearch);
      return 'alert';
    }
    return data;
  }
};

export const fetchDrinksAPI = async (endPointAPI, searchTerm) => {
  const invalidTerm = 'Search term not entered';
  if (endPointAPI === 'firstLetter') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    } if (searchTerm.length > 1) {
      global.alert('Your search must have only 1 (one) character');
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`);
    const data = await resultsFood.json();
    return data;
  }
  if (endPointAPI === 'ingredient') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`);
    const data = await resultsFood.json();
    if (data.drinks === null) {
      global.alert(noSearch);
      return 'alert';
    }
    return data;
  }
  if (endPointAPI === 'name') {
    if (!searchTerm) {
      global.alert(invalidTerm);
      return 'alert';
    }
    const resultsFood = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
    const data = await resultsFood.json();
    if (data.drinks === null) {
      global.alert(noSearch);
      return 'alert';
    }
    return data;
  }
};

export const fetchDetailsFoodAPI = async (id) => {
  const detailsFood = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await detailsFood.json();
  return data;
};

export const fetchDetailsDrinksAPI = async (id) => {
  const detailsDrinks = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await detailsDrinks.json();
  return data;
};

export const fetchRecommendationDrinks = async () => {
  const slicenumber = 6;
  const URLDrink = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const responseDrink = await fetch(URLDrink);
  const dataDrink = await responseDrink.json();
  return dataDrink.meals.slice(0, slicenumber);
};

export const fetchRecommendationMeals = async () => {
  const slicenumber = 6;
  const URLMeals = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const responseMeals = await fetch(URLMeals);
  const dataMeals = await responseMeals.json();
  return dataMeals.drinks.slice(0, slicenumber);
};
