import React from 'react';

const PagesManager = (props) => {
  return (
    <div style={ButtonsPageStyle}>
      <div>
        <input key="PreviousButton" style={PreviousButtonStyle} type='submit' value='Previous Page' onClick={props.previousPage} disabled={props.disablePreviousButton} />
      </div>

      <div>
        <p style={PageIndicatorStyle}> Page: {props.page} </p>
      </div>

      <div>
        <input key="NextButton" style={NextButtonStyle} type='submit' value='Next Page' onClick={props.nextPage} disabled={props.disableNextButton}/>
      </div>
    </div>
  )
}

const ButtonsPageStyle = {
  display:'flex',
}

const PageIndicatorStyle = {
  marginTop: '0px',
}

const PreviousButtonStyle = {
  marginRight: '10px',
  ':hover': {
    color: 'rgb(44, 123, 201)',
  }
}

const NextButtonStyle = {
  marginLeft: '10px',
  ':hover': {
    color: 'rgb(44, 123, 201)',
  }
}

export default PagesManager;
