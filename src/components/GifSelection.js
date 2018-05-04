import React from 'react';
import Radium from 'radium';

const GifSelection = (props) => {
  return (
    <div style={gifSelectionStyle.Div}>
      <div style={gifSelectionStyle.Content}>
        <div style={gifSelectionStyle.Header}>
          <h1>{props.title}</h1>
          <input type='submit' value='X' />
        </div>
        <iframe
          src={props.embed_url}
          alt={props.title}
          width="480"
          height="270"
          frameBorder="0"
          title={props.title}>
        </iframe>
        <p><b>By {props.username}</b></p>
        <p>Updated on: {props.import_datetime}</p>
      </div>
    </div>
  )
}

const FadeInKeyframes = Radium.keyframes({
    '0%': {opacity: '0'},
    '100%': {opacity: '1'},
  }, 'fadeIn');

const gifSelectionStyle = {
  Div: {
    // POSITIONING
    minWidth: '100%',
    minHeight: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // POSITIONING THE CONTENT OF THIS DIV
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(8,12,17,0.95)',
  },

  Content: {
    // COLORS
    backgroundColor: 'rgb(209, 103, 58)',
    border: '2px solid blue',
    // ANIMATION
    animation: 'x 0.3s ease-in',
    animationName: FadeInKeyframes,
    // STYLE OF WHAT IS INSIDE THE MAIN DIV
    padding: '20',
    display: 'flex',
    flexDirection: 'column',

    //POSITIONING CONTENT LEVEL 2
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // ':after': {
    //   content: "",
    //   zIndex: 100,
    //   backgroundColor: 'rgba(0,0,0,0.2)'
    // }
  },

  Header: {
    display: 'flex',
    flexDirection: 'row',
  }

}


export default Radium(GifSelection);
