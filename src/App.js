import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import GifSelection from './components/GifSelection';
import GifFeed from './components/GifFeed';
import PagesManager from './components/PagesManager';
import Radium from 'radium';
import {StyleRoot} from 'radium';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      gifSlice: [0, 10],
      page: 1,
      showSelectedGif: false,
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
              // id={gif.id} no necessary? is not used in GifFeed
              embed_url={gif.embed_url}
              title={gif.title}
              gifPosition={positionItem += 1}
              selectGifHandler={this.selectGifHandler}
            />
          </div>
        )
      })
      // Here I am saving also the GifsData because I am gonna use them when a Gif is selected;
      // showing all its information.
      this.setState({gifs: gifs, gifsData: data.data, });
    })
    this.resetResearch()
  }

  selectGifHandler = (position) => {
    const selectedGifData = this.state.gifsData[position]
    // For the moment I am only passing title. The main struggle is show the div in the correct way in the middle.
    const gifSelectionComponent = <GifSelection
      title={selectedGifData.title}
      embed_url={selectedGifData.embed_url}
      username={selectedGifData.username}
      import_datetime={selectedGifData.import_datetime}
      chooseSelectedGifHandler={this.chooseSelectedGifHandler}
      />

    this.setState({selectedGif: gifSelectionComponent, showSelectedGif: true})
    console.log(position, 'PROVA')
    console.log(this.state.gifsData[position], 'PO')

    //check Radium warning before, thanks
    // se riduci la finestra il div nero non è sufficente in  lunghezza
  }

  chooseSelectedGifHandler = () => {
    console.log('ciao')
    this.setState({selectedGif: null, showSelectedGif: false})
  }

  gifSlice = (start, end) => {
    return this.state.gifs.slice(start, end)
  }

  nextPage = () => {
    // .map create a copy of GifSlice so we are not modifying  direcly the state.
    // Is good.
    let increasedSlice = this.state.gifSlice.map(n => n + 10)
    // Here I probably shouldn't modify it like that, but make a copy
    let currentPage = this.state.page + 1
    this.setState({gifSlice: increasedSlice, page: currentPage})
    this.scrollTop()
  }

  resetResearch = () => {
    this.setState({gifSlice: [0, 10], page: 1})
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

    let selectedGif = this.state.selectedGif

    return (
      <StyleRoot>
        <div style={appDivStyle}>

          <Header fetchGiphy={this.fetchGiphy}/>

          <div style={gifsSliceStyle}>
            {this.gifSlice(this.state.gifSlice[0], this.state.gifSlice[1])}
          </div>

          { this.state.showSelectedGif &&
            selectedGif
          }

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
      </StyleRoot>
    );
  }
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
