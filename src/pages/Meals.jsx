import React, { useContext } from 'react';
import HeaderContext from '../context/HeaderContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Recipes from '../components/Recipes';
import Categories from '../components/Categories';

function Meals() {
  const { testAPI } = useContext(HeaderContext);
  const sliceList = 12;

  // useEffect(() => {
  //   const validation = testAPI?.length > 0;
  //   console.log(validation);
  // }, [testAPI]);

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
        ) : <Recipes /> }
      <Footer />
    </>
  );
}

export default Meals;
