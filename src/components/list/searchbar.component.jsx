import React from 'react';
import { Link, BrowserRouter as Router, withRouter} from 'react-router-dom'
// import './search.styles.css';

const SearchBar = ({ handleAddList, handleChange }) => {
  return (
    <div className="menu-bar">
      <form onSubmit={handleAddList}>
        <label>
          Search Owned Pokemon
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="tabs">
        <Link to='/'>Pokemon List</Link>
        <Link to='/mypoke'>My Pokemon List</Link>
      </div>
    </div>
  )
}

export default SearchBar;