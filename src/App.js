import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
      searchedWord: 'Italy'
    }
  }

  componentDidMount() {
    // this.fetchGiphy()
  }

  fetchGiphy = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=fvJXlCTHXqHZEjYzt5746FDrQwbWpcSR&q=${this.state.searchedWord}&limit=25&offset=0&rating=G&lang=en`)
    .then(results => {
      return results.json();
    }).then(data => {
      console.log(data, 'DATA RESULTS')
      let gifs = data.data.map((gif) => {
        return (
          <div key={gif.id}>
            <iframe src={gif.embed_url} alt={gif.title} width="480" height="270" frameBorder="0"></iframe>
          </div>
        )
      })
      this.setState({gifs: gifs});
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        {this.state.gifs}
      </div>
    );
  }
}

export default App;
