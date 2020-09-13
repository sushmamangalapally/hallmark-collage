import React, { Component } from "react";
import domtoimage from "dom-to-image";

const Collage = ({
      photo,
      pictures,
      updatePhotosSearch,
      text,
      fontFam,
      gBackgroundColor,
      fontColor,
      placement,
      updateText,
      updateFont
}) => {
  // constructor(props) {
  //   super(props);

  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  async function handleSubmit(event) {
    event.preventDefault();
  }

  const allowDrop = event => {
    console.log('wtf')
    event.preventDefault();
  };

  const drop = event => {
    console.log('cry')
    console.log(document.getElementById(data))
    var horizontallGrid = [
      "drag1",
      "drag2",
      "drag4",
      "drag5",
      "drag6",
      "drag7",
    ];
    var verticalGrid = ["drag3", "drag8"];
    event.preventDefault();

    var data = event.dataTransfer.getData("text");

    var img = undefined;
    if (
      document.getElementById(data).clientWidth <=
        document.getElementById(data).clientHeight &&
      verticalGrid.indexOf(event.target.id) !== -1
    ) {
      img = document.getElementById(data).getAttribute("src");
      event.target.style.backgroundImage = "url(" + img + ")";
      document.getElementById(event.target.id).style.border = "3px solid #00000000";
      updatePhotosSearch(data);
    } else if (
      document.getElementById(data).clientHeight <=
        document.getElementById(data).clientWidth &&
      horizontallGrid.indexOf(event.target.id) !== -1
    ) {
      img = document.getElementById(data).getAttribute("src");

      event.target.style.backgroundImage = "url(" + img + ")";

      document.getElementById(event.target.id).style.border = "3px solid #00000000";

      updatePhotosSearch(data);
    } else {
      alert('You must match picture according height and width!')
      return false;
    }
  };

  const saveCollage = () => {
    var getCanvas = document.getElementById("saveCollage");

    domtoimage.toJpeg(getCanvas, { quality: 0.95 }).then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  // render() {
  //   const {
  //     pictures,
  //     updatePhotosSearch,
  //     text,
  //     fontFam,
  //     gBackgroundColor,
  //     fontColor,
  //     placement,
  //     updateText,
  //     updateFont
  //   } = this.props;

    return (
      <div className="container">
        <div id="saveCollage" className={gBackgroundColor + " lighten-4"}>
          {placement === "top" ? (
            <div class="top-align">
              <h1
                onChange={(updateText, updateFont)}
                style={{ fontFamily: fontFam, color: fontColor }}
                className="collageHeader"
              >
                {text}
              </h1>
            </div>
          ) : (
            ""
          )}
          <div className="gallery">
            {
              [...Array(4)].map((val, index) => {
                return (
                  <figure
                    id={`drag${index+1}`}
                    className={`gallery__item gallery__item--${index+1}`}
                    onDrop={drop}
                    onDragOver={allowDrop}
                  >
                  </figure>
                )
              })
            }
            {placement === "center" ? (
              <div className="gallery__item gallery__item--5 text-center">
                <h4
                  className="gallery__item gallery__item--5 text-center"
                  onChange={(updateText, updateFont)}
                  style={{ fontFamily: fontFam, color: fontColor }}
                  className="collageHeader center-align"
                >
                  {text}
                </h4>
              </div>
            ) : (
              <figure
                id="drag5"
                className="gallery__item gallery__item--5"
                onDrop={drop}
                onDragOver={allowDrop}
              />
            )}


            {
              [6, 7, 8].map((val, index) => {
                return (
                  <figure
                    id={`drag${val}`}
                    className={`gallery__item gallery__item--${val}`}
                    onDrop={drop}
                    onDragOver={allowDrop}
                  >
                  </figure>
                )
              })
            }
          </div>
          {placement === "bottom" ? (
            <div class="bottom-align">
              <h1
                onChange={(updateText, updateFont)}
                style={{ fontFamily: fontFam, color: fontColor }}
                className="collageHeader"
              >
                {text}
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
        <a
          className="indigo lighten-4 btn-large right collage-btn"
          onClick={saveCollage}
        >
          Save Collage
        </a>
      </div>
    );
  }


export default Collage;
