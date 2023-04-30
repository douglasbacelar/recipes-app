import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ShareBtn() {
  const { setIsCopy, isCopy } = useContext(ApiContext);
  const { pathname } = useLocation();
  const newPathname = pathname.replace('/in-progress', '');
  return (
    <button
      type="button"
      className="flex w-24"
      data-testid="share-btn"
      onClick={ () => {
        copy(`http://localhost:3000${newPathname}`);
        setIsCopy(true);
      } }
    >
      <p className="font-bold text-justify text-sm">
        {' '}
        { isCopy && <span>Link copied!</span> }
      </p>
      <img src={ shareIcon } alt="botão de compartilhar" />
    </button>
  );
}

export default ShareBtn;
