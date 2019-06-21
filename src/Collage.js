import React, { Component } from 'react';
import domtoimage from 'dom-to-image';

class Collage extends Component {
  
  allowDrop = (event) => {
    event.preventDefault();
  }


  drop = (event) => {
      var horizontallGrid = ['drag1', 'drag4', 'drag5', 'drag6']
      var verticalGrid = ['drag3'];
    event.preventDefault();
    console.log('drop')
    console.log(event)
    var data = event.dataTransfer.getData("text");
    console.log(data)
    console.log(event.target)
    console.log(event.target.id)
    console.log(event.target.clientWidth)
    console.log(event.target.clientHeight)

    console.log(this.props.pictures)

    console.log(document.getElementById(data))
    console.log((document.getElementById(data)).getAttribute('src'));
    var img = undefined;
    console.log(document.getElementById(data).clientWidth)
    console.log(document.getElementById(data).clientHeight)
    console.log(verticalGrid.indexOf(event.target.id))
    if (document.getElementById(data).clientWidth <= document.getElementById(data).clientHeight && verticalGrid.indexOf(event.target.id) !== -1) {
        img = (document.getElementById(data)).getAttribute('src');
        event.target.style.backgroundImage = "url("+img+")";
        this.props.updatePhotosSearch(data)
    } else if (document.getElementById(data).clientHeight <= document.getElementById(data).clientWidth && horizontallGrid.indexOf(event.target.id) !== -1){
        img = (document.getElementById(data)).getAttribute('src');
        event.target.style.backgroundImage = "url("+img+")";
        this.props.updatePhotosSearch(data)
    } else {
        return false
    }
  }

  dragEnd = (event) => {
      console.log('done!')
    console.log(event)
  }

  saveCollage = () => {
    var getCanvas = document.getElementById("saveCollage");

// var node = document.getElementById('my-node');

domtoimage.toPng(getCanvas)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });


  }
  render() {
      const { pictures, updatePhotosSearch } = this.props;
    return (
        <div className="container">
            <div id="saveCollage">
                <div className="gallery">
                    <figure id="drag1" className="gallery__item gallery__item--1" onDrop={this.drop} onDragOver={this.allowDrop}>
                        {/* <img src="img/image-1.jpg" alt="Gallery image 1" class="gallery__img"/> */}
                    </figure>
                    <figure id="drag3" className="gallery__item gallery__item--3" onDrop={this.drop} onDragOver={this.allowDrop}>
                        {/* <img src="img/image-3.jpg" alt="Gallery image 3" class="gallery__img"/> */}
                    </figure>
                    <figure id="drag4" className="gallery__item gallery__item--4" onDrop={this.drop} onDragOver={this.allowDrop}>
                        {/* <img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img"/> */}
                    </figure>
                    <figure id="drag5" className="gallery__item gallery__item--5" onDrop={this.drop} onDragOver={this.allowDrop}>
                        {/* <img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img"/> */}
                    </figure>
                    <figure id="drag6" className="gallery__item gallery__item--6" onDrop={this.drop} onDragOver={this.allowDrop}>
                        {/* <img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img"/> */}
                    </figure>
                </div>
            </div>

            <button onClick={this.saveCollage}>Save Collage</button>
        </div>
    )
}
}

export default Collage
