import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareBtn() {
  const { setIsCopy } = useContext(ApiContext);
  const { pathname } = useLocation();
  const newPathname = pathname.replace('/in-progress', '');
  return (
    <button
      style={ { position: 'fixed', bottom: '0px', left: '270px' } }
      data-testid="share-btn"
      onClick={ () => {
        copy(`http://localhost:3000${newPathname}`);
        setIsCopy(true);
      } }
    >
      <img src={ shareIcon } alt="botão de compartilhar" />
    </button>
  );
}

export default ShareBtn;
