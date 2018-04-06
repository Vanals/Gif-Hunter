import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifFeed from './components/GifFeed';
import Radium from 'radium';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      gifSlice: [0, 10],
      page: 1,
    }
  }

  fetchGiphy = (event) => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=fvJXlCTHXqHZEjYzt5746FDrQwbWpcSR&q=${event.target.value}&limit=25&offset=0&rating=G&lang=en`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data, 'DATA RESULTS')
      let gifs = data.data.map((gif) => {
        return (
          <div key={gif.id}>
            <GifFeed id={gif.id} embed_url={gif.embed_url} title={gif.title}/>
          </div>
        )
      })
      this.setState({gifs: gifs});
    })
  }


  gifSlice = (start, end) => {
    return this.state.gifs.slice(start, end)
  }

  nextPage = () => {
    let increasedSlice = this.state.gifSlice.map(n => n + 10)
    let currentPage = this.state.page + 1
    this.setState({gifSlice: increasedSlice, page: currentPage})
  }

  previousPage = () => {
    let decreasedSlice = this.state.gifSlice.map(n => n - 10)
    this.setState({gifSlice: decreasedSlice})
  }

  disablePreviousButtonsChecker = () => {
    return (this.state.gifSlice[0] === 0) ? true : false
  }

  disableNextButtonsChecker = () => {
    return (this.state.gifSlice[1] > this.state.gifs.length) ? true : false
  }

  render() {
    let disablePreviousButton
    disablePreviousButton = this.disablePreviousButtonsChecker()

    let disableNextButton
    disableNextButton = this.disableNextButtonsChecker()

    return (
      <div style={appDivStyle}>
        <h4>Giphy Search</h4>
        <SearchBar fetchGiphy={this.fetchGiphy}/>

        {this.gifSlice(this.state.gifSlice[0], this.state.gifSlice[1])}
        
        <div style={ButtonsPageStyle}>
          <div>
            <input key="NextButton" style={PreviousButtonStyle} type='submit' value='Previous Page' onClick={this.previousPage} disabled={disablePreviousButton} />
          </div>

          <div>
            <p style={PageIndicatorStyle}> Page: {this.state.page} </p>
          </div>

          <div>
            <input key="PreviousButton" style={NextButtonStyle} type='submit' value='Next Page' onClick={this.nextPage} disabled={disableNextButton}/>
          </div>
        </div>


      </div>
    );
  }
}

const appDivStyle = {
  marginLeft: '10px',
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

export default Radium(App);
