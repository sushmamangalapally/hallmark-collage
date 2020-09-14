import React, { useEffect } from "react";
import Photo from "./Photo";

const Photos = ({pictures, noPictures, searchTerm}) => {
    console.log(pictures)
    console.log(searchTerm)
    return (
      <div
        className="photos-results card-panel indigo lighten-3"
        style={{  margin: '5px 0px', borderRadius: '5px' }}
      >
        {pictures && pictures.length > 0 ? (
          pictures.map(pic => (
            <Photo key={pic.id} photo={pic} pictures={pictures}/>
          ))
        ) : (
          <h2>{noPictures && searchTerm.length ? 'No results found for '+ searchTerm : 'No pictures yet'}</h2>
        )}
      </div>
    );
  }


export default Photos;
