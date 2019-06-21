import React, { Component } from 'react';
import Photos from './Photos';
import Collage from './Collage';

import axios from "axios";

const flickrAPIKey = 'b6100f8fd2a15cfd6e7bab74d65a17e3cb4e8b6f3276e73e9dbb2b580ef1b44b';

class Search extends Component {
    state = {
      pictures: [],
      query: '',
      noError: true
    }
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

  updatePhotosSearch = (photo) => {
      console.log(photo)
      console.log(this.state.pictures)

      this.setState((currentState) => ({
          picture: currentState.pictures.map((picture, currIndex) => {
              if (picture.id === photo) {
                  return currentState.pictures.splice(currIndex, 1);
              }
              return null;
          })
      }))

      console.log(this.state.pictures)


        // const getBook = this.state.books.find(b => b.id === book.id);
        // let newShelf = e.target.value;
        // if(getBook){
        //     this.setState((currentState) => ({
        //         books: currentState.books.map((getBook) => {
        //             if(getBook.id === book.id){
        //                 getBook.shelf = newShelf;
        //                 BooksAPI.update(book, newShelf)
        //                 .then(
        //                     currentState.books.filter(book => book.id !== getBook.id).concat([getBook])
        //                 )            
        //             }
        //             return getBook;
        //         })
        //     }))
        // }else{
        //     book.shelf = newShelf;
        //     BooksAPI.update(book, newShelf)
        //     .then(
        //         this.setState((prevState) => ({
        //             books: prevState.books.concat([book])
        //         }))
        //     )
        // }
        // console.log(e.target.value)
        // console.log(book);
    }
    render() {
        const { pictures, query, noError, updatePhotosSearch } = this.props;
        return (
            <div className="whole-thing">
            <div className="search-photos">
            <div className="search-books-input-wrapper">
                <input type="text" 
                    onChange= {(e) => this.handleChange(e.target.value)} 
                    placeholder="Search by relevance of pictures"/>
            </div>
            <Photos
                pictures = {this.state.pictures}
                updatePhotosSearch = {updatePhotosSearch}
            />
            </div>
            <Collage
            pictures = {this.state.pictures}
                updatePhotosSearch = {this.updatePhotosSearch}
        />
            </div>
        )
    }
}

export default Search
