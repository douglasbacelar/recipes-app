import React, { useContext } from 'react';
import HeaderContext from '../context/HeaderContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Meals() {
  const { testAPI } = useContext(HeaderContext);
  const sliceList = 12;

  return (
    <>
      <div>
        <Header title="Meals" />
      </div>
      { testAPI
        ? (
          testAPI.slice(0, sliceList).map((element, index) => (
            <div
              key={ index }
              data-testid={ `${index}-recipe-card` }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ element.strMealThumb }
                width={ 200 }
                alt={ element }
              />
              <p data-testid={ `${index}-card-name` }>{element.strMeal}</p>
            </div>
          ))
        ) : <h1>Deu RUim</h1> }
      <Footer />
    </>
  );
}

export default Meals;
