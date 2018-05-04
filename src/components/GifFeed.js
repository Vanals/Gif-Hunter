import React from 'react';

const SearchBar = (props) => {
  return (
      <div style={gifFrameStyle} onClickCapture={props.selectGifHandler.bind(this, props.gifPosition)} >
        <div style={frameDiv}>
          <iframe
            src={props.embed_url}
            alt={props.title}
            width="480"
            height="270"
            frameBorder="0"
            title={props.title}
          >
          </iframe>
        </div>
      </div>
  )
}

const frameDiv = {
  pointerEvents: 'none',
}

const gifFrameStyle = {
  margin: '5px',
  border: '4px solid rgb(0, 0, 0)',
}

export default SearchBar;
