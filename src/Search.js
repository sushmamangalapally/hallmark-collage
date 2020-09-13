import React, { Component, useState, useEffect } from "react";
import Photos from "./Photos";
import Collage from "./Collage";
import LoadFont from "./LoadFont";
import GoogleFontLoader from "react-google-font-loader";
import axios from "axios";
// import M from "materialize-css";
import Photo from "./Photo";
import apiConfig from './apiKeys';
import assetsList from './assetsList';
// import * from "spectre.css";


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
        `https://api.unsplash.com/search/photos/?page=1&client_id=${apiConfig.unsplashAPIKey}&query=${query}`
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
    console.log(event.currentTarget.id);
    setFontFam(event.currentTarget.id);
  };

  const updateBackgroundColor = event => {
    console.log("updateBackgroundColor");
    event.preventDefault();
    console.log(event.currentTarget.id);
    setGBackgroundColor(event.currentTarget.id);
  };

  const updateFontColor = event => {
    console.log("updateFontColor");
    event.preventDefault();
    console.log(event.currentTarget.id);
    setFontColor(event.currentTarget.id);
  };

  const updatePlacement = event => {
    console.log("updatePlacement");
    event.preventDefault();
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

    // let elems = document.querySelectorAll(".dropdown-trigger");
    // let instances = M.Dropdown.init(elems, {});
  }, []);


  function updatePhotosSearch(photo){
    console.log(photo);
    console.log(pictures);
    const currentPictures =  [ ...pictures ];
    console.log(currentPictures);

    const photosSplit = () => {
      currentPictures.map((picture, currIndex) => {
        if (picture.id === photo) {
          return currentPictures.splice(currIndex, 1);
        }
        return null;
      })
    }

    photosSplit()
    setPictures(currentPictures)

  };

    const colorKeys = Object.keys(assetsList.backgroundColorsList);

    const fontColorKeys = Object.keys(assetsList.fontColorsList);
    
    return (
      <div className="main-app">
        <LoadFont/>
        <div className="search-photos">
        <div className="section-main">
          <div className="row">
            <div className="input-field col s12">
              <input
                id="greeting_text"
                name="greeting_text"
                type="text"
                className="validate"
                value={text}
                onChange={e => updateText(e.target.value)}
                placeholder="Your Own Inside Greeting Here."
              />
              <label className="active" for="greeting_text">
                Enter Text
              </label>
            </div>
          </div>
          <div className="row">
            <p className="adjustment">Greeting Text Alignment</p>
            <div className="input-field col s6">
              <a
                className="dropdown-trigger waves-effect waves-light btn-large"
                href="#"
                data-target="dropdown4"
              >
                {placement}
                <i className="material-icons small">arrow_downward</i>
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

          <div className="row">
            <p className="adjustment">Font Style and Color Adjustment</p>
            <div className="input-field col s6">
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
                <i className="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown1" className="dropdown-content">
                {assetsList.getFonts.length > 0 ? (
                  assetsList.getFonts.map(gFont => (
                    <li
                      key={gFont}
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

            <div className="input-field col s6">
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
                <i className="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown3" className="dropdown-content">
                {Object.entries(assetsList.fontColorsList).length !== 0 ? (
                  fontColorKeys.map(color => (
                    <li
                      key={color}
                      className={color + ", lighten-3"}
                      id={assetsList.fontColorsList[color]}
                      onClick={updateFontColor.bind(this)}
                      style={{ backgroundColor: assetsList.fontColorsList[color] }}
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
            <p className="adjustment">Background Color Adjustment</p>
            <div className="input-field col s6">
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
                <i className="material-icons small">arrow_downward</i>
              </a>

              <ul id="dropdown2" className="dropdown-content">
                {Object.entries(assetsList.backgroundColorsList).length !== 0 ? (
                  colorKeys.map(color => (
                    <li
                      className={color + ", lighten-4"}
                      id={color}
                      onClick={updateBackgroundColor.bind(this)}
                      style={{ backgroundColor: assetsList.backgroundColorsList[color] }}
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
            <label className="active" for="adding_photos_text">
              Add Photos. Simply drag and drop the photos to the collage.
            </label>
            <input
              type="text"
              onChange={e => handleChange(e.target.value)}
              placeholder="Search by relevance of pictures"
            />
          </div>
          </div>

          <Photos
            pictures={pictures}
          />
        </div>
        <Collage
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
