import React from 'react';
import lensGif from '../images/search_animation_go.gif';

const SearchBar = (props) => {
  return (
    <div>
      <input style={inputBarStyle} type='text' placeholder='Search GIFs' onChange={props.fetchGiphy} maxLength="20"/>
      <img src={lensGif} style={lensGifStyle} alt='search lens gif' />
    </div>
  )
}


const lensGifStyle = {
  height: '35px',
  width: '35px',
  marginBottom: '-10px',
}

const inputBarStyle = {
  width: '300px',
  height: '30px',
  fontSize: '20px',
  fontWeight: 'bold',
  outline: 'none',
  marginTop: '0px',
  fontStyle: 'italic',
}

export default SearchBar;
