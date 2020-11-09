import React, { useEffect } from "react";
import Photo from "./Photo";
import spinner from '../assets/spinner.gif'

const Photos = ({pictures, noPictures, searchTerm, loadMore, updatePhotosSearch, isLoading}) => {
    console.log(pictures)
    console.log(searchTerm)
    return (
      <div
        className="photos-results card-panel indigo lighten-3"
        style={{  margin: '5px 0px', borderRadius: '5px' }}
      >
        
          {pictures && pictures.length > 0 ? (
            <>
              {pictures.map((pic, index) => (
                <Photo key={pic.id+index} photo={pic} pictures={pictures} updatePhotosSearch={updatePhotosSearch}/>
              ))}
              <button className="btn btn-lg" onClick={loadMore}>Load More</button>
            </>
        ) : (
          <h2>{isLoading && searchTerm.length ? <img src={spinner} style={{width: '50px', margin: 'auto', display: 'block'}} alt="Loading"/> : (noPictures && searchTerm.length ? 'No results found for '+ searchTerm : 'No pictures yet')}</h2>
        )}
        {/* <div className="empty"></div> */}
      </div>
    );
  }


export default Photos;
