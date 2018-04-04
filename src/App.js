import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import GifFeed from './components/GifFeed';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      gifSlice: [0, 10],
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

  render() {
    return (
      <div>
        <h4>Giphy Search</h4>
        <SearchBar fetchGiphy={this.fetchGiphy}/>

        {this.gifSlice(this.state.gifSlice[0], this.state.gifSlice[1])}

        
      </div>
    );
  }
}

export default App;
