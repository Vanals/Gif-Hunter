import React from 'react';

const PagesManager = (props) => {
  return (
    <div style={ButtonsPageStyleDiv}>
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

const ButtonsPageStyleDiv = {
  display:'flex',
  marginTop: '20px',
}

const PageIndicatorStyle = {
  marginTop: '0px',
  fontSize: '20px',
  fontWeight: 'bold',
  color: 'rgb(239, 179, 25)',
  fontStyle: 'italic',
}

const PreviousButtonStyle = {
  marginRight: '10px',
  outline: 'none',
  width: '150px',
  height: '30px',
  fontSize: '20px',
  fontWeight: 'bold',
}

const NextButtonStyle = {
  marginLeft: '10px',
  outline: 'none',
  width: '150px',
  height: '30px',
  fontSize: '20px',
  fontWeight: 'bold',
}

export default PagesManager;
