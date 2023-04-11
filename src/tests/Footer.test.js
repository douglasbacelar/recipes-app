/* import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  return (
    <div data-testid="footer" style={ { position: 'fixed', bottom: '0px' } }>
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
        onClick={ () => history.push('/meals') }
      >
        <img
          src={ mealIcon }
          data-testid="meals-bottom-btn"
          alt="foto de talheres "
        />
      </button>
    </div>
  );
}

export default Footer;
 */
