import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import heart from '../images/blackHeartIcon.svg';
import profile from '../images/profileIcon.svg';

function Footer() {
  const history = useHistory();

  return (
    <div
      data-testid="footer"
      className="footer flex justify-around py-2
    fixed bottom-0 bg-white w-screen drop-shadow-2xl z-50"
    >
      <button
        onClick={ () => history.push('/meals') }
      >
        <img
          src={ mealIcon }
          data-testid="meals-bottom-btn"
          alt="foto de talheres "
        />
      </button>

      <button
        onClick={ () => history.push('/drinks') }
      >
        <img
          src={ drinkIcon }
          data-testid="drinks-bottom-btn"
          alt="foto de uma bebida"
        />
      </button>

      <button
        onClick={ () => history.push('/favorite-recipes') }
      >
        <img
          src={ heart }
          alt="foto de um coração"
        />
      </button>

      <button
        onClick={ () => history.push('/profile') }
      >
        <img
          src={ profile }
          data-testid="drinks-bottom-btn"
          alt="foto de uma bebida"
        />
      </button>
    </div>
  );
}

export default Footer;
