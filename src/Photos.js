import React, { useEffect } from "react";
import Photo from "./Photo";

const Photos = ({pictures, noPictures, searchTerm, loadMore}) => {
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
                <Photo key={pic.id+index} photo={pic} pictures={pictures}/>
              ))}
              <button class="btn btn-lg" onClick={loadMore}>Load More</button>
            </>
        ) : (
          <h2>{noPictures && searchTerm.length ? 'No results found for '+ searchTerm : 'No pictures yet'}</h2>
        )}
        {/* <div class="empty"></div> */}
      </div>
    );
  }


export default Photos;
