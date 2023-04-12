import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ApiContext from '../context/ApiContext';
import shareIcon from '../images/shareIcon.svg';

const copy = require('clipboard-copy');

function DoneRecipeCards() {
  const history = useHistory();
  const {
    isCopy, setIsCopy, filterDone } = useContext(ApiContext);

  return (
    <div>
      { filterDone?.map((element, index) => (
        <div key={ index }>
          <button
            onClick={ () => history.push(`/${element.type}s/${element.id}`) }
          >
            <img
              width={ 75 }
              height={ 75 }
              data-testid={ `${index}-horizontal-image` }
              src={ element.image }
              alt={ element.name }
            />
            <p data-testid={ `${index}-horizontal-top-text` }>
              {element.nationality}
              {' '}
              -
              {' '}
              {element.category}
              {' '}
              -
              {' '}
              {element.alcoholicOrNot}
            </p>
            <p data-testid={ `${index}-horizontal-name` }>{element.name}</p>
            <p data-testid={ `${index}-horizontal-done-date` }>
              {element.doneDate}
              {' '}
            </p>
            <div>
              {' '}
              <h2>Tags</h2>
              {element.tags.slice(0, 2).map((elem, i) => (
                <p key={ i } data-testid={ `${index}-${elem}-horizontal-tag` }>{elem}</p>
              ))}
            </div>
            { isCopy && <h1>Link copied!</h1> }
          </button>
          <br />
          <button
            onClick={ () => {
              copy(`http://localhost:3000/${element.type}s/${element.id}`);
              setIsCopy(true);
            } }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="botão de compartilhar"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default DoneRecipeCards;
