import React, { useContext } from 'react';
import HeaderContext from '../context/HeaderContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import Categories from '../components/Categories';

function Drinks() {
  const { testAPI } = useContext(HeaderContext);
  const sliceList = 12;

  return (
    <>
      <div>
        <Header title="Drinks" />
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
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strDrinkThumb }
                width={ 200 }
                alt={ element }
              />
              <p data-testid={ `${index}-card-name` }>{element.strDrink}</p>
            </div>
          ))
        ) : <Recipes /> }
      <Footer />
    </>
  );
}

export default Drinks;
