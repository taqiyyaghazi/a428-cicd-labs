import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <section className="search-bar">
      <input type="search" placeholder="Cari catatan..." onChange={onSearch}/>
    </section>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default SearchBar;
