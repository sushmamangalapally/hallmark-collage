import React, { Component } from 'react';
import domtoimage from 'dom-to-image';
// sgMail.setApiKey('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') 


class Collage extends Component {
   constructor (props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      phone: '',
      formErrors: {fname: '', lname: '', email: '', phone: ''},
      fnameValid: false,
      lnameValid: false,
      emailValid: false,
      phoneValid: false,
      formValid: false
    }


    this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value)
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let fnameValid = this.state.fnameValid;
    let lnameValid = this.state.lnameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch(fieldName) {
      case 'fname':
        fnameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.first = fnameValid ? '' : ' name is invalid. ';
        fieldValidationErrors.first += value.length >= 2 ? '' : ' name should contain at least 2 chars. ';
        break;      
      case 'lname':
        lnameValid = value.match(/^[a-zA-Z]*$/) && value.length >= 2;
        fieldValidationErrors.last = lnameValid ? '' : ' name is invalid. ';
        fieldValidationErrors.last += value.length >= 2 ? '' : ' name should contain at least 2 chars. ';
        break;      
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid. ';
        break;
      case 'phone':
        phoneValid = value.length == 10;
        fieldValidationErrors.phone = phoneValid ? '' : ' should contain 10 digits exactly. ';
        fieldValidationErrors.phone += value.match(/^\d+$/) ? '' : ' should contain numbers only. ';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    fnameValid: fnameValid,
                    lnameValid: lnameValid,
                    emailValid: emailValid,
                    phoneValid: phoneValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.fnameValid && this.state.emailValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


  handleSubmit(event) {

        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey('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');
          const msg = {
          to: 'sushma.m812@gmail.com',
          from: 'sushma.m812@gmail.com',
          subject: 'JonesForm',
          text: 'and easy to do anywhere, even with Node.js',
          html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
      event.preventDefault();
  }

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

// domtoimage.toPng(getCanvas)
//     .then(function (dataUrl) {
//         var img = new Image();
//         img.src = dataUrl;
//         document.body.appendChild(img);
//     })
//     .catch(function (error) {
//         console.error('oops, something went wrong!', error);
//     });

// domtoimage.toBlob(getCanvas)
//     .then(function (blob) {
//         window.saveAs(blob, 'my-node.png');
//     });

domtoimage.toJpeg(getCanvas, { quality: 0.95 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });


  }










  render() {
      const { pictures, updatePhotosSearch, text, fontFam, gBackgroundColor, fontColor } = this.props;

      //var getBackgroundColor = gBackgroundColor+', lighten-3'
    return (
        <div className="container">
            <div id="saveCollage" className={gBackgroundColor+' lighten-4'}>
            <div class="center-align">
                <h1 onChange={this.updateText, this.updateFont} style={{ fontFamily: fontFam, color: fontColor }} className="collageHeader">{text}</h1>
                </div>
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

            {/* <button onClick={this.saveCollage}>Save Collage</button> */}
            <a className="indigo lighten-4 btn-large right" onClick={this.saveCollage}>Save Collage</a>

        </div>
    )
}
}

export default Collage
