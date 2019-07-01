import React, { Component } from "react";
import logo from "./logo.svg";
import Collage from "./Collage";
import Search from "./Search";
import "./stylesheet/App.css";

class App extends Component {
  constructor() {
    super(); //allows you to use this in the constructor.
    this.state = {
      pictures: [],
      query: "",
      noError: true
    };
  }

  render() {
    console.log(this.state.pictures);
    return (
      <div className="App">
        <nav>
          <div class="nav-wrapper indigo lighten-3">
            <a href="#" class="brand-logo header">
              Create Your Photo Collage
            </a>
          </div>
        </nav>

        <Search
          pictures={this.state.pictures}
          query={this.state.query}
          noError={this.state.noError}
        />
      </div>
    );
  }
}

export default App;
