import React from 'react';

const SearchBar = (props) => {
  return (
    <input type='text' placeholder='Search GIFs' onChange={props.fetchGiphy}/>
  )
}

export default SearchBar;
