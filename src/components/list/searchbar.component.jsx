import React from 'react';
import { Link } from 'react-router-dom'
import { css, jsx } from '@emotion/react'

const SearchBar = () => {
  return (
    <div className="menu-bar">
      <div className="page-tabs">
        <Link to='/'>Pokemon List</Link>
        <Link to='/mypoke'>My Pokemon List</Link>
      </div>
    </div>
  )
}

export default SearchBar;