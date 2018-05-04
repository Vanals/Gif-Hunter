import React from 'react';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <div style={searchAreaStyle}>
        <h1 style={titleStyle}>Giphy Search</h1>
      <div>
        <SearchBar fetchGiphy={props.fetchGiphy}/>
      </div>
    </div>
  )
}

const searchAreaStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const titleStyle = {
  color: 'rgb(40, 96, 156)',
}

export default Header;
