import React, { Component, useEffect, useState, Fragment }  from "react";
import Collage from "./Collage";
import Search from "./Search";
import "./stylesheet/App.css";

function App() {

  return (
      <div className="App">
        <header className="navbar">
          <section className="navbar-section">
           
          </section>
          <section className="navbar-center">
            Create Your Photo Collage
          </section>
          {/* <section className="navbar-section">
            Made by Sushma
          </section> */}
        </header>
        <Search/>
      </div>
  );
}

export default App;
