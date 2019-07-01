import React, { Component } from "react";
import domtoimage from "dom-to-image";

class Collage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      formErrors: { fname: "", lname: "", email: "", phone: "" },
      fnameValid: false,
      lnameValid: false,
      emailValid: false,
      phoneValid: false,
      formValid: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let fnameValid = this.state.fnameValid;
    let lnameValid = this.state.lnameValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;

    switch (fieldName) {
      case "fname":
        fnameValid = value.match(/^[a-zA-Z]*$/);
        fieldValidationErrors.first = fnameValid ? "" : " name is invalid. ";
        fieldValidationErrors.first +=
          value.length >= 2 ? "" : " name should contain at least 2 chars. ";
        break;
      case "lname":
        lnameValid = value.match(/^[a-zA-Z]*$/) && value.length >= 2;
        fieldValidationErrors.last = lnameValid ? "" : " name is invalid. ";
        fieldValidationErrors.last +=
          value.length >= 2 ? "" : " name should contain at least 2 chars. ";
        break;
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid. ";
        break;
      case "phone":
        phoneValid = value.length == 10;
        fieldValidationErrors.phone = phoneValid
          ? ""
          : " should contain 10 digits exactly. ";
        fieldValidationErrors.phone += value.match(/^\d+$/)
          ? ""
          : " should contain numbers only. ";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        fnameValid: fnameValid,
        lnameValid: lnameValid,
        emailValid: emailValid,
        phoneValid: phoneValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.fnameValid && this.state.emailValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  allowDrop = event => {
    event.preventDefault();
  };

  drop = event => {
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
      this.props.updatePhotosSearch(data);
    } else if (
      document.getElementById(data).clientHeight <=
        document.getElementById(data).clientWidth &&
      horizontallGrid.indexOf(event.target.id) !== -1
    ) {
      img = document.getElementById(data).getAttribute("src");

      event.target.style.backgroundImage = "url(" + img + ")";

      document.getElementById(event.target.id).style.border = "3px solid #00000000";

      this.props.updatePhotosSearch(data);
    } else {
      return false;
    }
  };

  saveCollage = () => {
    var getCanvas = document.getElementById("saveCollage");

    domtoimage.toJpeg(getCanvas, { quality: 0.95 }).then(function(dataUrl) {
      var link = document.createElement("a");
      link.download = "my-image-name.jpeg";
      link.href = dataUrl;
      link.click();
    });
  };

  render() {
    const {
      pictures,
      updatePhotosSearch,
      text,
      fontFam,
      gBackgroundColor,
      fontColor,
      placement,
      updateText,
      updateFont
    } = this.props;

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
            <figure
              id="drag1"
              className="gallery__item gallery__item--1"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
            <figure
              id="drag2"
              className="gallery__item gallery__item--2"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
            <figure
              id="drag3"
              className="gallery__item gallery__item--3"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
            <figure
              id="drag4"
              className="gallery__item gallery__item--4"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
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
                onDrop={this.drop}
                onDragOver={this.allowDrop}
              />
            )}

            <figure
              id="drag6"
              className="gallery__item gallery__item--6"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
            <figure
              id="drag7"
              className="gallery__item gallery__item--7"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
            <figure
              id="drag8"
              className="gallery__item gallery__item--8"
              onDrop={this.drop}
              onDragOver={this.allowDrop}
            >
            </figure>
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
          onClick={this.saveCollage}
        >
          Save Collage
        </a>
      </div>
    );
  }
}

export default Collage;
