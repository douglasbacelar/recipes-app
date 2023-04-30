import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

function Header() {
  return (
    <section className="py-2 px-2 bg-slate-100 font-sans">
      <div className="flex justify-around">
        <SearchBar />
      </div>
    </section>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}.isRequired;

export default Header;
