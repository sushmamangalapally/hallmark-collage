import React, { Component, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowDown, faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'

const Photo = ({photo, updatePhotosSearch}) => {
  const drag = event => {
    console.log("drag");
    console.log(event);
    event.dataTransfer.setData("text", event.target.id);
  };
  const clickPhoto = event => {
    console.log(event);
     event.currentTarget.className += " active";
  }

  const expandMenu = event => {
    if (event.keyCode) {
      if (event.keyCode !== 13) {
        return;
      }
    }
    console.log(event);
    console.log(event.currentTarget);
    console.log(event.currentTarget.parentNode)
    const parentUlMenu = event.currentTarget.parentNode.querySelector('ul');
    if (parentUlMenu.style.visibility === 'visible') {
      parentUlMenu.setAttribute('style', 'visibility: hidden; display: none;')
    } else {
      parentUlMenu.setAttribute('style', 'visibility: visible; display: inline-block; position: absolute; top: 10%; min-width: 6rem; margin-top: .125rem; margin-bottom: .125rem; border: 1px solid #dddbda; border-radius: .25rem; padding: .25rem 0; font-size: .75rem; background: #fff; -webkit-box-shadow: 0 2px 3px 0 rgba(0,0,0,.16); box-shadow: 0 2px 3px 0 rgba(0,0,0,.16); -webkit-transform: translateX(-50%); -ms-transform: translateX(-50%); transform: translateX(-50%);')
    }
  }
  const dragPicture = event => {
    console.log(event);
    console.log(event.currentTarget);
    const pictureIndex = parseInt(event.currentTarget.getAttribute('data-index'));
    console.log(event.currentTarget.getAttribute('data-index'))
    console.log(event.currentTarget.parentElement)
    console.log(event.currentTarget.parentElement.parentElement)
    const picture = event.currentTarget.parentElement.parentElement.querySelector('img');
    console.log(document.querySelector(`figure#drag${pictureIndex}`))
    const collageFigure = document.querySelector(`figure#drag${pictureIndex}`);

      var verticalGrid = [3, 8];
      var horizontalGrid = [
          1,2,4,5,6,7
      ];
      if (collageFigure === null) {
          return;
      }

      console.log(collageFigure)

      console.log(collageFigure.clientWidth)
      console.log(collageFigure.clientHeight)
      console.log(pictureIndex)

      var img = undefined;
      if (
          picture.clientWidth <=
              picture.clientHeight &&
          verticalGrid.indexOf(pictureIndex) !== -1
      ) {
          img = picture.getAttribute("src");
          collageFigure.style.backgroundImage = "url(" + img + ")";
          document.getElementById(`drag${pictureIndex}`).style.border =
              "3px solid #00000000";
          updatePhotosSearch(picture.getAttribute('id'));
      } else if (
          picture.clientHeight <=
              picture.clientWidth &&
          horizontalGrid.indexOf(pictureIndex) !== -1
      ) {
          img = picture.getAttribute("src");

          collageFigure.style.backgroundImage = "url(" + img + ")";

          document.getElementById(`drag${pictureIndex}`).style.border =
              "3px solid #00000000";

          updatePhotosSearch(picture.getAttribute('id'));
      } else {
          alert("You must match picture according height and width!");
          return false;
      }
    
  }
  return (
    <div className="image-container">
      <img
        className="fit-picture"
        key={photo["id"]}
        id={photo["id"]}
        src={photo["urls"]["thumb"]}
        draggable="true"
        onDragStart={drag}
        alt={photo.alt_description}
        onClick={clickPhoto}
        tabIndex="0"
      />
      <FontAwesomeIcon
        icon={faExpandArrowsAlt}
        tabIndex="0" 
        onClick={expandMenu}
        onKeyPress={expandMenu}
      />
      <ul className="menu">
      {
        [1,2,3,4,5,6,7,8].map((index) => (
          <li
            className="menu-item"
            tabIndex="0"
            onKeyPress={dragPicture}
            onClick={dragPicture}
            data-index={index}
            key={index}
          >
            #{index} {(index === 3 || index === 8) ? 'Vertical' : 'Horizontal'}
          </li>
        ))
      }
      </ul>
    </div>
  );
}


export default Photo;
