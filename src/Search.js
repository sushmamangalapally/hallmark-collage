/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Photos from "./Photos";
import Collage from "./Collage";
import LoadFont from "./LoadFont";
import axios from "axios";
import Dropdown from "./Dropdown";
import apiConfig from "./apiKeys";
import assetsList from "./assetsList";
// import * from "spectre.css";

function Search() {
    const [pictures, setPictures] = useState([]);
    const [query, setQuery] = useState("");
    const [noError, setNoError] = useState(true);
    const [text, setText] = useState("");
    const [gBackgroundColor, setGBackgroundColor] = useState("lightgrey");
    const [fontColor, setFontColor] = useState("grey");
    const [placement, setPlacement] = useState("top");
    const [fontFam, setFontFam] = useState("");
    const [noPictures, setNoPictures] = useState(false);
    

    const callAPI = (query) => {
        axios
            .get(
                `https://api.unsplash.com/search/photos/?page=1&client_id=${apiConfig.unsplashAPIKey}&query=${query}`
            )
            .then((response) => {
                console.log(response);
                return response.data.results;
            })
            .then(
                (jsonData) => {
                    console.log(jsonData);
                    let pictureObj = jsonData;
                    let picturesArr = jsonData.map((picture) => {
                        return picture["urls"]["small"];
                    });
                    console.log(picturesArr);
                    setPictures(pictureObj);
                    setNoError(true);
                    if (picturesArr.length === 0) {
                      setNoPictures(true);
                      setQuery(query);
                    }
                },
                (error) => {
                    if (error) {
                        alert("Warning");
                        setPictures([]);
                        setNoError(true);
                        setNoPictures(true);
                    }
                }
            );
    };

    async function handleChange(query) {
        if (query) {
            callAPI(query);
        } else {
            setPictures([]);
            setQuery(query);
            setNoError(true);
        }
    }

    const updateText = (text) => {
        if (text.length > 36) {
            console.log(text.length);
            alert("Can't enter more than 36 characters");
            return false;
        }
        setText(text);
    };

    const updateFont = (event) => {
        console.log("updateFont");
        event.preventDefault();
        console.log(event.currentTarget.id);
        console.log(event.currentTarget.getAttribute('data-value'))
        setFontFam(event.currentTarget.getAttribute('data-value'));
    };

    const updateBackgroundColor = (event) => {
        console.log("updateBackgroundColor");
        event.preventDefault();
        console.log(event.currentTarget.id);
        console.log(gBackgroundColor)
        setGBackgroundColor(event.currentTarget.getAttribute('data-value'));
    };

    const updateFontColor = (event) => {
        console.log("updateFontColor");
        event.preventDefault();
        console.log(event.currentTarget.id);
        setFontColor(event.currentTarget.getAttribute('data-value'));
    };

    const updatePlacement = (event) => {
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
            document.getElementsByClassName(
                "text-center"
            )[0].style.backgroundImage = "";
        }
    }, []);

    function updatePhotosSearch(photo) {
        console.log(photo);
        console.log(pictures);
        const currentPictures = [...pictures];
        console.log(currentPictures);

        const photosSplit = () => {
            currentPictures.map((picture, currIndex) => {
                if (picture.id === photo) {
                    return currentPictures.splice(currIndex, 1);
                }
                return null;
            });
        };

        photosSplit();
        setPictures(currentPictures);
    }

    return (
        <div className="main-app">
            <LoadFont />
            <div className="search-photos">
                <div className="section-main">
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <label className="active form-label" htmlFor="greeting_text">
                                Enter Text
                                <br/>
                            </label>
                            <input
                                id="greeting_text"
                                name="greeting_text"
                                type="text"
                                className="validate form-input"
                                value={text}
                                onChange={(e) => updateText(e.target.value)}
                                placeholder="Add Text Here."
                            />
                        </div>
                    </div>
                    <Dropdown 
                      title='Greeting Text Alignment'
                      subTitle='Text Alignment'
                      updateFunction={updatePlacement}
                      array={assetsList.alignment}
                      ulId="dropdown4"
                      category='text'
                    />

                    <Dropdown 
                      title='Font Style Adjustment'
                      subTitle='Font Style'
                      updateFunction={updateFont}
                      array={assetsList.getFonts}
                      category='font'
                      ulId="dropdown1"
                    />

                    <Dropdown 
                      title='Font Color Adjustment'
                      subTitle='Font Color'
                      updateFunction={updateFontColor}
                      array={assetsList.fontColorsList}
                      category='font-color'
                      ulId="dropdown3"
                    />

                    <Dropdown 
                      title='Background Color Adjustment'
                      subTitle='Background Color'
                      updateFunction={updateBackgroundColor}
                      array={assetsList.backgroundColorsList}
                      category='font-color'
                      ulId="dropdown2"
                    />

                    <div className="search-books-input-wrapper form-group">
                        <label className="active form-label" htmlFor="adding_photos_text">
                            Add Photos. Simply drag and drop the photos to the
                            collage.
                            <br/>
                            Search by relevance of pictures
                            <br/>
                        </label>
                        <input
                            type="text"
                            onChange={(e) => handleChange(e.target.value)}
                            placeholder="Search Pictures"
                            className="form-input"
                            id="adding_photos_text"
                        />
                    </div>
                </div>

                <Photos pictures={pictures} searchTerm={query} noPictures={noPictures}/>
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
