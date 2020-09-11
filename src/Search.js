import React, { Component, useState, useEffect } from "react";
import Photos from "./Photos";
import Collage from "./Collage";
import GoogleFontLoader from "react-google-font-loader";
import axios from "axios";
import M from "materialize-css";

const unsplashAPIKey =
  "b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b";

function Search() {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery] = useState('');
  const [noError, setNoError] = useState(true);
  const [text, setText] = useState('');
  const [gBackgroundColor, setGBackgroundColor] = useState('grey');
  const [fontColor, setFontColor] = useState('grey');
  const [placement, setPlacement] = useState('top');
  const [fontFam, setFontFam] = useState('');

  const callAPI = (query) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&client_id=${unsplashAPIKey}&query=${query}`
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
          setPictures(pictureObj);
          setNoError(true);
        },
        error => {
          if (error) {
            alert("Warning");
          setPictures([]);
          setNoError(true);
          }
        }
      );
  }

  async function handleChange(query) {
    if (query) {
      callAPI(query);
    } else {
      setPictures([]);
      setQuery(query);
      setNoError(true);
    }
  };

  const updateText = text => {
    if (text.length > 36) {
      console.log(text.length);
      alert("Can't enter more than 36 characters");
      return false;
    }
    setText(text);
  };

  const updateFont = event => {
    console.log("updateFont");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    setFontFam(event.currentTarget.id);
  };

  const updateBackgroundColor = event => {
    console.log("updateBackgroundColor");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    setGBackgroundColor(event.currentTarget.id);
  };

  const updateFontColor = event => {
    console.log("updateFontColor");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);
    setFontColor(event.currentTarget.id);
  };

  const updatePlacement = event => {
    console.log("updatePlacement");
    event.preventDefault();
    console.log(event);
    console.log(event.currentTarget.id);

    setPlacement(event.currentTarget.id);
  };

  useEffect(() => {
    if (
      placement === "center" &&
      document.getElementsByClassName("text-center")[0] !== undefined
    ) {
      document.getElementsByClassName("text-center")[0].style.backgroundImage = "";
    }
}, []);

  const updatePhotosSearch = photo => {
    console.log(photo);
    console.log(pictures);
    const currentPictures = pictures;

    const photosSplit = () => {
      currentPictures.map((picture, currIndex) => {
        if (picture.id === photo) {
          return currentPictures.splice(currIndex, 1);
        }
        return null;
      })
    }

    console.log(currentPictures);
    photosSplit()
    setPictures(currentPictures)
    console.log(currentPictures);

    // console.log(pictures);
  };
  
    // const { pictures, query, noError, updatePhotosSearch } = this.props;

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
                value={text}
                onChange={e => updateText(e.target.value)}
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
                {placement}
                <i class="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown4" className="dropdown-content">
                <li onClick={updatePlacement.bind(this)} id="top">
                  <a href="#">Place text on the top</a>
                </li>
                <li onClick={updatePlacement.bind(this)} id="center">
                  <a href="#">Place text in the center</a>
                </li>
                <li onClick={updatePlacement.bind(this)} id="bottom">
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
                {fontFam === "" ? (
                  "Font Style"
                ) : (
                  <span style={{ fontFamily: fontFam }}>
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
                      onClick={updateFont.bind(this)}
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
                style={{ backgroundColor: fontColor }}
                href="#"
                data-target="dropdown3"
              >
                {fontColor === "grey" ? (
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
                      onClick={updateFontColor.bind(this)}
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
                  gBackgroundColor +
                  " lighten-4 dropdown-trigger waves-effect waves-light btn-large background"
                }
                href="#"
                data-target="dropdown2"
              >
                {gBackgroundColor === "grey" ? (
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
                      onClick={updateBackgroundColor.bind(this)}
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
                gBackgroundColor +
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
              onChange={e => handleChange(e.target.value)}
              placeholder="Search by relevance of pictures"
            />
          </div>

          <Photos
            pictures={pictures}
            updatePhotosSearch={updatePhotosSearch}
          />
        </div>
        <Collage
          pictures={pictures}
          updatePhotosSearch={updatePhotosSearch}
          text={text}
          fontFam={fontFam}
          gBackgroundColor={gBackgroundColor}
          fontColor={fontColor}
          placement={placement}
          updateText={updateText}
          updateFont={updateFont}
        />
      </div>
    );
  }


export default Search;
