import React, { Component, useEffect } from "react";
import Photo from "./Photo";
import axios from "axios";

const Photos = ({pictures}) => {
  console.log(pictures)




    return (
      
      <div className="photos-results card-panel indigo lighten-3">
        {pictures && pictures.length > 0 ? (
          pictures.map(pic => (
            <Photo key={pic.id} photo={pic} pictures={pictures}/>
          ))
        ) : (
          <div>No pictures</div>
        )}
      </div>
    );
  }


export default Photos;
