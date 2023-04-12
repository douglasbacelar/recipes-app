export const getDoneRecipes = () => {
  const doneRecipes = localStorage.getItem('doneRecipes');
  return doneRecipes ? JSON.parse(doneRecipes) : [];
};
