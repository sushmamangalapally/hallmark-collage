import React, { Component } from 'react';
import logo from './logo.svg';
import Collage from './Collage';
import Search from './Search';
import './stylesheet/App.css';

const flickrAPIKey = 'b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b';

class App extends Component {
  // let flickrAPIKey = '487028c5d047cf319625041132ffa375';
  constructor() {
    super(); //allows you to use this in the constructor.
    this.state = {
      pictures: [],
      query: '',
      noError: true
    }
  }

    
  render() {
    console.log(this.state.pictures)
  return (
    <div className="App indigo lighten-5">
        {/* <div className="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div> */}
                    
          <Search
            pictures = {this.state.pictures}
            query = {this.state.query}
            noError = {this.state.noError}
          />
        
        
        

    </div>
  );
  }
}

export default App;
