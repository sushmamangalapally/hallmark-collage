import React, { Component }  from 'react'

class Photo extends Component {
    drag = (event) => {
    console.log('drag')
    console.log(event)
    event.dataTransfer.setData("text", event.target.id);
  }

   dragEnd = (event) => {
      console.log('done!')
    console.log(event)
  }

    render(){
        const { photo } = this.props;
    return (
        <img className="fit-picture" key={photo['id']}
                            id={photo['id']}
                            src={photo['urls']['thumb']}
                            draggable="true"
                            onDragStart={this.drag}
                            onDragEnd={this.dragEnd}
                            alt={photo.alt_description}

                            />
    )
    }
}

export default Photo
