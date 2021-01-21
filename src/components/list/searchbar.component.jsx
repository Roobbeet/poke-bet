import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom'
// import './search.styles.css';

const SearchBar = ({ handleAddList, handleChange }) => {
  return (
    <div className="menu-bar">
      <form onSubmit={handleAddList}>
        <label>
          Search Pokemon
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {/* for menus */}
      <Router>
          <Link to='/'>Pokemon List</Link>
          <Link to='/mypoke'>Owned Pokemon</Link>
      </Router>
    </div>
  )
}

export default SearchBar;