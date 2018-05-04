import React from 'react';
import Radium from 'radium';

const GifSelection = (props) => {
  return (
    <div style={gifSelectionStyle.Div}>
      <h1 style={gifSelectionStyle.Content}>{props.title}</h1>
    </div>
  )
}

const FadeInKeyframes = Radium.keyframes({
    '0%': {opacity: '0'},
    '100%': {opacity: '1'},
  }, 'fadeIn');

const gifSelectionStyle = {
  Div: {
    //positioning
    minWidth: '100%',
    minHeight: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    //positioning the content of this div
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(8,12,17,0.95)',
  },

  Content: {
    //colors
    backgroundColor: 'rgb(209, 103, 58)',
    border: '2px solid blue',
    //animation
    animation: 'x 0.3s ease-in',
    animationName: FadeInKeyframes,
    //positioning inside the huge div container
    padding: '20',

    //POSITIONING CONTENT LEVEL 2
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // ':after': {
    //   content: "",
    //   zIndex: 100,
    //   backgroundColor: 'rgba(0,0,0,0.2)'
    // }
  }

}

export default Radium(GifSelection);
