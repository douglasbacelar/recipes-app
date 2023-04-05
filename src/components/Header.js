import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './SearchBar';

function Header({ title }) {
  const history = useHistory();
  const propsTitle = title;
  const [show, setShow] = useState(false);
  return (
    <div>
      <section>
        <h1>Recipes App!</h1>
        { !(title === 'Profile'
        || title === 'Done Recipes'
        || title === 'Favorite Recipes') && (
          <button
            onClick={ () => setShow(!show) }
          >
            <img
              src={ searchIcon }
              data-testid="search-top-btn"
              alt="Ícone de pesquisa"
            />
          </button>
        )}
        <button>
          <Link
            to="/profile"
            onClick={ () => history.push('/profile') }
          >
            <img
              src={ profileIcon }
              data-testid="profile-top-btn"
              alt="Foto de Perfil"
            />
          </Link>
        </button>
        { show && (
          <SearchBar />) }
        <h1 data-testid="page-title">{propsTitle}</h1>
      </section>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}.isRequired;

export default Header;
