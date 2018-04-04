import React from 'react';
import Radium from 'radium';

const NextButton = (props) => {
  return (
      <input style={NextButtonStyle} type='submit' value='Next Page' onClick={props.nextPage} />
  )
}

const NextButtonStyle = {
  ':hover': {
    color: 'rgb(44, 123, 201)',
  }
}

export default Radium(NextButton);
