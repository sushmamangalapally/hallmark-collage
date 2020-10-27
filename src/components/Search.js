/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Photos from "./Photos";
import Collage from "./Collage";
import LoadFont from "../assets/LoadFont";
import axios from "axios";
import Dropdown from "./Dropdown";
import SearchForm from './SearchForm';
import apiConfig from "../assets/apiKeys";
import assetsList from "../assets/assetsList";
var arr = require('../assets/fakePicture').arr;

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
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    function handleChange(query) {
        setIsLoading(true);
        if (query) {
            setPage(1);
            setQuery(query);
            // callAPI(page, query);
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

    const loadMore = () => {
        // alert('Laoding more')
        // alert(page);
        // alert(query);
        // console.log('pictures')
        // console.log(pictures)
        const allImgs = document.querySelectorAll('div.photos-results img');
        const lastImagePlacement = allImgs.length-1;
        // setPage()
        setIsLoading(true);
        setPage(page+1);
        // callAPI(page+1, query);
        // console.log('!pics!')

        // console.log(pictures)
        // console.log(lastImagePlacement)
        const totalImagesLoaded = document.querySelectorAll('div.photos-results img');
        console.log(totalImagesLoaded[lastImagePlacement]);
        totalImagesLoaded[lastImagePlacement].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://api.unsplash.com/search/photos/?page=${page}&client_id=${apiConfig.unsplashAPIKey}&query=${query}`);
            console.log('RESULT');
            console.log(result);
            // console.log(result.data);
            if (result &&  result.data.results) {
                let pictureObj = result.data.results;
                let picturesArr = pictureObj.map((picture) => {
                    return picture["urls"]["small"];
                });
                console.log(picturesArr);
                // setPictures(pictureObj);
                setPictures(pictures => (page !== 1) ? pictures.concat(pictureObj).filter((v,i,a)=>a.findIndex(t=>(t.id === v.id))===i) : pictureObj);
                setNoError(true);
                if (picturesArr.length === 0) {
                    setNoPictures(true);
                    setIsLoading(false);
                }
            } else {
                alert("Warning: Pictures API loading requests too many. Using fake photo search data for testing purpose.");
                setPictures(arr);
                setNoError(true);
                setNoPictures(true);
                setIsLoading(false);
            }
            // setItems(result.data);
        }
        fetchItems();
        if (
            placement === "center" &&
            document.getElementsByClassName("text-center")[0] !== undefined
        ) {
            document.getElementsByClassName(
                "text-center"
            )[0].style.backgroundImage = "";
        }
    }, [page, query, placement]);

    function updatePhotosSearch(photo) {
        console.log(photo);
        console.log(pictures);
        let currentPictures = [...pictures];
        console.log(currentPictures);

        // const photosSplit = () => {
        //     currentPictures.map((picture, currIndex) => {
        //         if (picture.id === photo) {
        //             return currentPictures.splice(currIndex, 1);
        //         }
        //         return null;
        //     });
        // };
        currentPictures = currentPictures.filter(picture => picture.id !== photo);
        console.log('12currentPictures')
        console.log(currentPictures)

        // photosSplit();
        setPictures(currentPictures);
    }

    return (
        <div className="main-app">
            <LoadFont />
            <p className="messageMobile">Not mobile-friendly. Please use desktop version.</p>
            <div className="search-photos">
                <div className="section-main">
                    <div className="row form-group">
                        <div className="input-field col s12">
                            <label className="active form-label" htmlFor="greeting_text">
                                <b>Enter Text</b>
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
                      category='placement'
                      fontFam={fontFam}
                      placement={placement}
                      fontColor={fontColor}
                      gBackgroundColor={gBackgroundColor}
                    />

                    <Dropdown 
                      title='Font Style Adjustment'
                      subTitle='Font Style'
                      updateFunction={updateFont}
                      array={assetsList.getFonts}
                      category='font'
                      ulId="dropdown1"
                      fontFam={fontFam}
                      placement={placement}
                      fontColor={fontColor}
                      gBackgroundColor={gBackgroundColor}
                    />

                    <Dropdown 
                      title='Font Color Adjustment'
                      subTitle='Font Color'
                      updateFunction={updateFontColor}
                      array={assetsList.fontColorsList}
                      category='font-color'
                      ulId="dropdown3"
                      fontFam={fontFam}
                      placement={placement}
                      fontColor={fontColor}
                      gBackgroundColor={gBackgroundColor}
                    />

                    <Dropdown 
                      title='Background Color Adjustment'
                      subTitle='Background Color'
                      updateFunction={updateBackgroundColor}
                      array={assetsList.backgroundColorsList}
                      category='background-color'
                      ulId="dropdown2"
                      fontFam={fontFam}
                      placement={placement}
                      fontColor={fontColor}
                      gBackgroundColor={gBackgroundColor}
                    />

                    <div className="search-books-input-wrapper form-group">
                        <label className="active form-label" htmlFor="adding_photos_text">
                            <p><b>Add Photos</b></p>
                            Simply drag and drop the photos to the
                            collage.
                            <br/>
                            Search by relevance of pictures
                            <br/>
                        </label>

                        <SearchForm
                            searchTerm={query}
                            onSearchInput={handleChange}
                            // onSearchSubmit={handleSearchSubmit}
                        />
                    </div>
                </div>

                <Photos pictures={pictures} searchTerm={query} noPictures={noPictures} loadMore={loadMore} updatePhotosSearch={updatePhotosSearch} isLoading={isLoading}/>
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
