import React, { useContext } from 'react';
import HeaderContext from '../context/HeaderContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import Categories from '../components/Categories';

function Meals() {
  const { testAPI } = useContext(HeaderContext);
  const sliceList = 12;

  return (
    <>
      <div>
        <Header title="Meals" />
        <div>
          <Categories />
        </div>
      </div>
      { testAPI?.length > 0
        ? (
          testAPI.slice(0, sliceList).map((element, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
              id="teste-teste"
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strMealThumb }
                width={ 200 }
                alt={ element }
                id="teste-teste2"
              />
              <p
                data-testid={ `${index}-card-name` }
                id="teste-teste3"
              >
                {element.strMeal}
              </p>
            </div>
          ))
        ) : <Recipes /> }
      <Footer />
    </>
  );
}

export default Meals;
