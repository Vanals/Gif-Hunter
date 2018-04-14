import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

import GifFeed from './components/GifFeed';
import PagesManager from './components/PagesManager';
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
      let positionItem = -1
      let gifs = data.data.map((gif) => {
        return (
          <div key={gif.id}>
            <GifFeed
              id={gif.id}
              embed_url={gif.embed_url}
              title={gif.title}
              gifPosition={positionItem += 1}
              selectGifHandler={this.selectGifHandler}
            />
          </div>
        )
      })
      this.setState({gifs: gifs, gifsData: data.data});
    })
  }

  selectGifHandler = (position) => {
    const selectedGifData = this.state.gifsData[position]
    const selectedGifDescription = <h1>{position}</h1>
    this.setState({selectedGif: selectedGifDescription})
    console.log(position, 'PROVA')
    // fai hide and show when click per il contenuto di selectedGifDescription
    // e usando absolute o altro, piazzalo al centro(absolute nn so.. nn sarebbe responsive)
    //check Radium warning before, thanks
    //gifFeed test give error
  }

  gifSlice = (start, end) => {
    return this.state.gifs.slice(start, end)
  }

  nextPage = () => {
    let increasedSlice = this.state.gifSlice.map(n => n + 10)
    let currentPage = this.state.page + 1
    this.setState({gifSlice: increasedSlice, page: currentPage})
    this.scrollTop()
  }

  scrollTop = () => {
    window.scrollTo(0, 0);
  }

  previousPage = () => {
    let decreasedSlice = this.state.gifSlice.map(n => n - 10)
    let currentPage = this.state.page - 1
    this.setState({gifSlice: decreasedSlice, page: currentPage})
    this.scrollTop()
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

        <div style={searchAreaStyle}>
            <h1 style={titleStyle}>Giphy Search</h1>
          <div>
            <SearchBar fetchGiphy={this.fetchGiphy}/>
          </div>
        </div>

        <div style={gifsSliceStyle}>
          {this.gifSlice(this.state.gifSlice[0], this.state.gifSlice[1])}
        </div>

        <div style={PagesManagerStyle}>
          <PagesManager
            previousPage={this.previousPage}
            nextPage={this.nextPage}
            disablePreviousButton={disablePreviousButton}
            disableNextButton={disableNextButton}
            page={this.state.page}
          />
        </div>
      </div>
    );
  }
}

const titleStyle = {
  color: 'rgb(40, 96, 156)',
}

const searchAreaStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
}

const appDivStyle = {
  backgroundColor: 'rgb(0, 0, 0)',
  width: '100vw',
  height: '100vw',
}

const gifsSliceStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginTop: '30px',
  backgroundColor: 'rgb(46, 70, 106)',
  margin: '100px',
  padding: '50px',
  borderRadius: '30px',
}

const PagesManagerStyle = {
  display: 'flex',
  justifyContent: 'center',
}

export default Radium(App);
