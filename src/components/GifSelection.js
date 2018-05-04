import React from 'react';
import Radium from 'radium';

const GifSelection = (props) => {
  return (
    <div style={gifSelectionStyle.Div}>
      <div style={gifSelectionStyle.Content}>

        <div style={gifSelectionStyle.Header}>
          <h1>{props.title.substr(0, props.title.lastIndexOf("GIF"))}</h1>
          <input style={exitButtonStyle} type='submit' value='X' onClick={props.chooseSelectedGifHandler}/>
        </div>
        <iframe
          src={props.embed_url}
          alt={props.title}
          width="480"
          height="270"
          frameBorder="0"
          title={props.title.substr(0, props.title.lastIndexOf("GIF"))}>
        </iframe>
        <p><b>By {props.username === "" ? "NotKnown" : props.username}</b></p>
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
    backgroundColor: 'rgb(53, 66, 119)',
    // ANIMATION
    animation: 'x 0.3s ease-in',
    animationName: FadeInKeyframes,
    // STYLE OF WHAT IS INSIDE THE MAIN DIV
    padding: '20px',
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
    justifyContent: 'space-between',
  }

}

const exitButtonStyle = {
  backgroundColor: 'rgb(53, 66, 119)',
  border: '2px solid rgb(53, 66, 119',
  padding: '0px',
  color: 'rgb(167, 160, 160)',
  fontWeight: 'bold',
  fontSize: '25px',
  width: '30px',
  height: '30px',
  outline: 'none',
}

export default Radium(GifSelection);
