import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import ApiContext from '../context/ApiContext';
import '../styles/Recipe.css';

function Recommend({ carouselKey, carouselObjKeys }) {
  const { fetchInitialCards, initialRecipes } = useContext(ApiContext);
  const { img, name, url } = carouselObjKeys;
  const sliceList = 6;

  useEffect(() => {
    fetchInitialCards(url);
  }, []);

  return (
    <div className="carouselFather">
      {
        initialRecipes !== undefined && (
          initialRecipes[[carouselKey]]?.slice(0, sliceList).map((elem, index) => (
            <div
              className="carouselChildren"
              key={ index }
              data-testid={ `${index}-recommendation-card` }
            >
              <p data-testid={ `${index}-recommendation-title` }>{elem[name]}</p>
              <img
                style={ { width: '180px',
                  height: '150px',
                  marginBottom: '50px',
                  marginLeft: '1px',
                } }
                src={ elem[img] }
                alt={ elem[name] }
              />
            </div>
          )))
      }
    </div>
  );
}

Recommend.propTypes = {
  carouselKey: PropTypes.string.isRequired,
  carouselObjKeys: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Recommend;
