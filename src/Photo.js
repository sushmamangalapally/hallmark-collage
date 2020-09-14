import React, { Component } from "react";

const Photo = ({photo}) => {
  const drag = event => {
    console.log("drag");
    console.log(event);
    event.dataTransfer.setData("text", event.target.id);
  };
  const clickPhoto = event => {
    console.log(event);
     event.currentTarget.className += " active"
  }
    return (
      <img
        className="fit-picture"
        key={photo["id"]}
        id={photo["id"]}
        src={photo["urls"]["thumb"]}
        draggable="true"
        onDragStart={drag}
        alt={photo.alt_description}
        onClick={clickPhoto}
      />
    );
}


export default Photo;
