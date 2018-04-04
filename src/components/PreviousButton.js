import React from 'react';
import Radium from 'radium';

const PreviousButton = (props) => {
  return (
      <input style={PreviousButtonStyle} type='submit' value='Previous Page' onClick={props.previousPage} />
  )
}

const PreviousButtonStyle = {
  ':hover': {
    color: 'rgb(44, 123, 201)',
  }
}

export default Radium(PreviousButton);
