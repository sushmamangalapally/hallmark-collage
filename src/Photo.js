import React, { Component, useState } from "react";

const Photo = ({photo}) => {
  const [pictureClicked, setPictureClicked] = useState(false);
  const [pictureLeft, setPictureLeft] = useState(0);
  const [pictureRight, setPictureRight] = useState(0);

  const drag = event => {
    console.log("drag");
    console.log(event);
    event.dataTransfer.setData("text", event.target.id);
  };
  const clickPhoto = event => {
    console.log(event);
    setPictureClicked(true);
     event.currentTarget.className += " active";
  }
  const mouseDown = event => {
    setPictureClicked(true);
  }
  const mouseMove = event => {
    if (pictureClicked === true) {
      console.log('mouseMove')
      console.log(event)
      event.currentTarget.style.left = event.pageX - pictureLeft;
      event.currentTarget.style.right = event.pageX - pictureRight;

    }
    
  }
  const mouseUp = event => {
    setPictureClicked(false);
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
        onMouseDown={ mouseDown }
        onMouseMove={ mouseMove }
        onMouseUp={ mouseUp }
      />
    );
}


export default Photo;
