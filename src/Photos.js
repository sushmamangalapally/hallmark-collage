import React, { Component } from "react";
import Photo from "./Photo";
import axios from "axios";

class Photos extends Component {
  render() {
    const { pictures } = this.props;
    console.log("in photos");
    console.log(pictures);
    return (
      <div className="photos-results card-panel indigo lighten-3">
        {pictures && pictures.length > 0 ? (
          pictures.map(pic => (
            <Photo key={pic.id} photo={pic} pictures={pictures} />
          ))
        ) : (
          <div>No pictures</div>
        )}
      </div>
    );
  }
}

export default Photos;
