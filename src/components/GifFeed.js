import React from 'react';

const SearchBar = (props) => {
  return (
      <iframe src={props.embed_url} alt={props.title} width="480" height="270" frameBorder="0"></iframe>
  )
}

export default SearchBar;
