import React, { Component } from 'react';
import logo from './logo.svg';
import './stylesheet/App.css';
import axios from "axios";
const flickrAPIKey = 'b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b';
class App extends Component {
  // let flickrAPIKey = '487028c5d047cf319625041132ffa375';
  constructor() {
    super(); //allows you to use this in the constructor.
    this.state = {
      pictures: [],
      query: '',
      noError: true
    }
  }
//const flickrAPIKey = '487028c5d047cf319625041132ffa375';
//router.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=cat&sort=relevance&safe_search=1&per_page=10&format=json&nojsoncallback=1`, function(req, res, next) {

  callAPI(query) { //http://localhost:9000/testAPI
    axios.get(`https://api.unsplash.com/search/photos/?page=1&client_id=${flickrAPIKey}&query=${query}`)
      .then((response) => {
        console.log(response)
        return response.data.results;
      })
      .then((jsonData) => {
        //https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined
        //If you make this function an arrow function, it will keep the context it had when you wrote it
        console.log(jsonData)
        let pictureObj = jsonData;
        let picturesArr = jsonData.map((picture) => {
          return picture['urls']['small']
        })
        console.log(picturesArr)
        this.setState({
          pictures: pictureObj,
          noError: true
      })
    }, (error) => {
      if (error) {
        alert('Warning')
        this.setState({
          pictures: [],
          noError: true
        })
      }
      })
  }

  handleChange = (query) => {
    if(query){
      this.callAPI(query);
    // .catch(function(){
    //   alert('Warning')
    //   this.setState({
    //     pictures: {},
    //     noError: true
    // })
    // })
    }else{
        this.setState({
            pictures: [],
            query: query,
            noError: true
        })
    }
  }
  
  allowDrop = (event) => {
    event.preventDefault();
  }
  

  drag = (event) => {
    console.log('drag')
    console.log(event)
    event.dataTransfer.setData("text", event.target.id);
  }

  drop = (event) => {
    event.preventDefault();
    console.log('drop')
    console.log(event)
    var data = event.dataTransfer.getData("text");
    console.log(data)
    console.log(event.target)
    console.log(document.getElementById(data))
    console.log((document.getElementById(data)).getAttribute('src'))
    var img = (document.getElementById(data)).getAttribute('src');
    event.target.style.backgroundImage = "url("+img+")";
  }
  // componentDidMount = () => {
  //   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrAPIKey}&tags=dogs&sort=relevance&safe_search=1&per_page=10&format=json&nojsoncallback=1`)
  //   .then(function(response){
  //     return response.json();
  //   })
  //   .then((jsonData) => {
  //     //https://stackoverflow.com/questions/49600249/reactjs-cannot-read-property-setstate-of-undefined
  //     //If you make this function an arrow function, it will keep the context it had when you wrote it
  //     console.log(jsonData)
  //     let pictureObj = jsonData.photos.photo;
  //     let picturesArr = jsonData.photos.photo.map((picture) => {
  //       return picture
  //     })
  //     console.log(picturesArr)
  //     this.setState({
  //       pictures: picturesArr
  //     })
  //   })
  //   .catch(function(){
  //     alert('Warning')
  //   })
  // }
  render() {
    console.log(this.state.pictures)
  return (
    <div className="App">
        <div className="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
                    <div className="search-books-input-wrapper">
                        <input type="text" 
                            onChange= {(e) => this.handleChange(e.target.value)} 
                            placeholder="Search by relevance of pictures"/>
                    </div>
        {this.state.pictures.length > 0 ? (
          this.state.pictures.map((pic) => ( 
            <img className="fit-picture" key={pic['id']}
            id={pic['id']}
            src={pic['urls']['thumb']}
            draggable="true" onDragStart={(e) => this.drag(e)}
            alt={pic.alt_description}/>
          ))

        ) :
        (
          <div>No pictures</div>
        )
        }
                <div className="container">
            <div className="gallery">
                <figure id="drag1" className="gallery__item gallery__item--1" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {/* <img src="img/image-1.jpg" alt="Gallery image 1" class="gallery__img"/> */}
                </figure>
                <figure id="drag3" className="gallery__item gallery__item--3" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {/* <img src="img/image-3.jpg" alt="Gallery image 3" class="gallery__img"/> */}
                </figure>
                <figure id="drag4" className="gallery__item gallery__item--4" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {/* <img src="img/image-4.jpg" alt="Gallery image 4" class="gallery__img"/> */}
                </figure>
                <figure id="drag5" className="gallery__item gallery__item--5" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {/* <img src="img/image-5.jpg" alt="Gallery image 5" class="gallery__img"/> */}
                </figure>
                <figure id="drag6" className="gallery__item gallery__item--6" onDrop={(e) => this.drop(e)} onDragOver={(e) => this.allowDrop(e)}>
                    {/* <img src="img/image-6.jpg" alt="Gallery image 6" class="gallery__img"/> */}
                </figure>
            </div>
        </div>

    </div>
  );
  }
}

export default App;
