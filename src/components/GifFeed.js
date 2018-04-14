import React from 'react';

const SearchBar = (props) => {
  return (
      <div style={gifFrameStyle}>
        <iframe src={props.embed_url} alt={props.title} width="480" height="270" frameBorder="0"></iframe>
      </div>
  )
}

const gifFrameStyle = {
  margin: '5px',
  border: '4px solid rgb(0, 0, 0)',
}

export default SearchBar;
