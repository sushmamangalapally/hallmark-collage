import React, { Component } from "react";
import Photos from "./Photos";
import Collage from "./Collage";
import GoogleFontLoader from "react-google-font-loader";
import axios from "axios";
import M from "materialize-css";

const flickrAPIKey =
  "b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b";

class Search extends Component {
  state = {
    pictures: [],
    query: "",
    noError: true,
    text: "",
    fontFam: "",
    gBackgroundColor: "grey",
    fontColor: "grey",
    placement: "top"
  };

  callAPI(query) {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&client_id=${flickrAPIKey}&query=${query}`
      )
      .then(response => {
        console.log(response);
        return response.data.results;
      })
      .then(
        jsonData => {
          console.log(jsonData);
          let pictureObj = jsonData;
          let picturesArr = jsonData.map(picture => {
            return picture["urls"]["small"];
          });
          console.log(picturesArr);
          this.setState({
            pictures: pictureObj,
            noError: true
          });
        },
        error => {
          if (error) {
            alert("Warning");
            this.setState({
              pictures: [],
              noError: true
            });
          }
        }
      );
  }

  handleChange = query => {
    if (query) {
      this.callAPI(query);
    } else {
      this.setState({
        pictures: [],
        query: query,
        noError: true
      });
    }
  };

  updateText = text => {
    if (text.length > 36) {
      console.log(text.length);
      alert("Can't enter more than 36 characters");
      return false;
    }

    this.setState({
      text: text
    });
  };

  updateFont = event => {
    console.log("updateFont");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    this.setState({
      fontFam: event.currentTarget.id
    });
  };

  updateBackgroundColor = event => {
    console.log("updateBackgroundColor");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    this.setState({
      gBackgroundColor: event.currentTarget.id
    });
  };

  updateFontColor = event => {
    console.log("updateFontColor");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    this.setState({
      fontColor: event.currentTarget.id
    });
  };

  updatePlacement = event => {
    console.log("updatePlacement");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);

    this.setState({
      placement: event.currentTarget.id
    });
  };

  componentDidMount() {
    if (
      this.state.placement === "center" &&
      document.getElementsByClassName("text-center")[0] !== undefined
    ) {
      document.getElementsByClassName("text-center")[0].style.backgroundImage = "";
    }
  }

  updatePhotosSearch = photo => {
    console.log(photo);
    console.log(this.state.pictures);

    this.setState(currentState => ({
      picture: currentState.pictures.map((picture, currIndex) => {
        if (picture.id === photo) {
          return currentState.pictures.splice(currIndex, 1);
        }
        return null;
      })
    }));

    console.log(this.state.pictures);
  };
  render() {
    const { pictures, query, noError, updatePhotosSearch } = this.props;

    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".dropdown-trigger");
      var instances = M.Dropdown.init(elems, {});
    });

    var getFonts = [
      "Roboto",
      "Fjalla One",
      "Lobster",
      "Abel",
      "Fredoka One",
      "Varela Round",
      "Dancing Script",
      "Shadows Into Light",
      "Amatic SC",
      "Amiri",
      "Patua One",
      "Permanent Marker"
    ];

    var backgroundColorsList = {
      red: "#ef9a9a",
      pink: "#f48fb1",
      purple: "#ce93d8",
      "deep-purple": "#b39ddb",
      indigo: "#9fa8da",
      blue: "#90caf9",
      "light-blue": "#81d4fa",
      cyan: "#80deea",
      teal: "#80cbc4",
      green: "#a5d6a7",
      "light-green": "#c5e1a5",
      lime: "#e6ee9c",
      yellow: "#fff59d",
      amber: "#ffe082",
      orange: "#ffcc80",
      "deep-orange": "#ffab91",
      brown: "#bcaaa4",
      grey: "#eeeeee",
      "blue-grey": "#b0bec5",
      white: "##f5f5f5"
    };

    var fontColorsList = {
      red: "#e57373",
      pink: "#f06292",
      purple: "#ba68c8",
      "deep-purple": "#9575cd",
      indigo: "#7986cb",
      blue: "#64b5f6",
      "light-blue": "#4fc3f7",
      cyan: "#4dd0e1",
      teal: "#4db6ac",
      green: "#81c784",
      "light-green": "#aed581",
      lime: "#dce775",
      yellow: "#fff176",
      amber: "#ffd54f",
      orange: "#ffb74d",
      "deep-orange": "#ff8a65",
      brown: "#a1887f",
      grey: "#e0e0e0",
      "blue-grey": "#90a4ae"
    };

    const colorKeys = Object.keys(backgroundColorsList);

    const fontColorKeys = Object.keys(fontColorsList);
    
    return (
      <div className="whole-thing">
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"]
            },
            {
              font: "Fjalla One",
              weights: [400, 700]
            },
            {
              font: "Lobster",
              weights: [400, 700]
            },
            {
              font: "Abel",
              weights: [400, 700]
            },
            {
              font: "Fredoka One",
              weights: [400, 700]
            },
            {
              font: "Varela Round",
              weights: [400, 700]
            },
            {
              font: "Dancing Script",
              weights: [400, 700]
            },
            {
              font: "Shadows Into Light",
              weights: [400, 700]
            },
            {
              font: "Amatic SC",
              weights: [400, 700]
            },
            {
              font: "Amiri",
              weights: [400, 700]
            },
            {
              font: "Patua One",
              weights: [400, 700]
            },
            {
              font: "Permanent Marker",
              weights: [400, 700]
            }
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />

        <div className="search-photos">
          <div class="row">
            <div class="input-field col s12">
              <input
                id="greeting_text"
                name="greeting_text"
                type="text"
                className="validate"
                value={this.state.text}
                onChange={e => this.updateText(e.target.value)}
                placeholder="Your Own Inside Greeting Here."
              />
              <label class="active" for="greeting_text">
                Enter Text
              </label>
            </div>
          </div>
          <div className="row">
            <p class="adjustment">Greeting Text Alignment</p>
            <div class="input-field col s6">
              <a
                className="dropdown-trigger waves-effect waves-light btn-large"
                href="#"
                data-target="dropdown4"
              >
                {this.state.placement}
                <i class="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown4" className="dropdown-content">
                <li onClick={this.updatePlacement.bind(this)} id="top">
                  <a href="#">Place text on the top</a>
                </li>
                <li onClick={this.updatePlacement.bind(this)} id="center">
                  <a href="#">Place text in the center</a>
                </li>
                <li onClick={this.updatePlacement.bind(this)} id="bottom">
                  <a href="#">Place text on the bottom</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <p class="adjustment">Font Style and Color Adjustment</p>
            <div class="input-field col s6">
              <a
                className="dropdown-trigger waves-effect waves-light btn-large"
                href="#"
                data-target="dropdown1"
              >
                {this.state.fontFam === "" ? (
                  "Font Style"
                ) : (
                  <span style={{ fontFamily: this.state.fontFam }}>
                    Font Style
                  </span>
                )}
                <i class="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown1" className="dropdown-content">
                {getFonts.length > 0 ? (
                  getFonts.map(gFont => (
                    <li
                      style={{ fontFamily: gFont + ", monospaced" }}
                      id={gFont}
                      onClick={this.updateFont.bind(this)}
                    >
                      <a href="#">{gFont}</a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a href="#!">No Font</a>
                  </li>
                )}
              </ul>
            </div>

            <div class="input-field col s6">
              <a
                className="dropdown-trigger waves-effect waves-light btn-large background"
                style={{ backgroundColor: this.state.fontColor }}
                href="#"
                data-target="dropdown3"
              >
                {this.state.fontColor === "grey" ? (
                  "Font Color"
                ) : (
                  <span>Font Color</span>
                )}
                <i class="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown3" className="dropdown-content">
                {Object.entries(fontColorsList).length !== 0 ? (
                  fontColorKeys.map(color => (
                    <li
                      className={color + ", lighten-3"}
                      id={fontColorsList[color]}
                      onClick={this.updateFontColor.bind(this)}
                      style={{ backgroundColor: fontColorsList[color] }}
                    >
                      <a href="#">{color}</a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a href="#!">No Font Color</a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="row">
            <p class="adjustment">Background Color Adjustment</p>
            <div class="input-field col s6">
              <a
                className={
                  this.state.gBackgroundColor +
                  " lighten-4 dropdown-trigger waves-effect waves-light btn-large background"
                }
                href="#"
                data-target="dropdown2"
              >
                {this.state.gBackgroundColor === "grey" ? (
                  "Background Color"
                ) : (
                  <span>Background Color</span>
                )}
                <i class="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown2" className="dropdown-content">
                {Object.entries(backgroundColorsList).length !== 0 ? (
                  colorKeys.map(color => (
                    <li
                      className={color + ", lighten-4"}
                      id={color}
                      onClick={this.updateBackgroundColor.bind(this)}
                      style={{ backgroundColor: backgroundColorsList[color] }}
                    >
                      <a href="#">{color}</a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a href="#!">No Background Color</a>
                  </li>
                )}
              </ul>
            </div>
            <div
              className={
                this.state.gBackgroundColor +
                " lighten-4 col s3 background-color"
              }
            />
          </div>

          <div className="search-books-input-wrapper">
            <label class="active" for="adding_photos_text">
              Add Photos. Simply drag and drop the photos to the collage.
            </label>
            <input
              type="text"
              onChange={e => this.handleChange(e.target.value)}
              placeholder="Search by relevance of pictures"
            />
          </div>

          <Photos
            pictures={this.state.pictures}
            updatePhotosSearch={updatePhotosSearch}
          />
        </div>
        <Collage
          pictures={this.state.pictures}
          updatePhotosSearch={this.updatePhotosSearch}
          text={this.state.text}
          fontFam={this.state.fontFam}
          gBackgroundColor={this.state.gBackgroundColor}
          fontColor={this.state.fontColor}
          placement={this.state.placement}
          updateText={this.updateText}
          updateFont={this.updateFont}
        />
      </div>
    );
  }
}

export default Search;
