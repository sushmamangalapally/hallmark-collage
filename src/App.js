import React, { Component, useEffect, useState, Fragment }  from "react";
import logo from "./logo.svg";
import Collage from "./Collage";
import Search from "./Search";
import "./stylesheet/App.css";

function App() {

  return (
        <div className="App">
          <nav>
            <div className="nav-wrapper indigo lighten-3">
              <a href="#" className="brand-logo header">
                Create Your Photo Collage
              </a>
            </div>
          </nav>
          <header class="navbar">
  <section class="navbar-section">
    <a href="..." class="navbar-brand mr-2">Spectre.css</a>
    <a href="..." class="btn btn-link">Docs</a>
    <a href="..." class="btn btn-link">GitHub</a>
  </section>
  <section class="navbar-section">
    <div class="input-group input-inline">
      <input class="form-input" type="text" placeholder="search"/>
      <button class="btn btn-primary input-group-btn">Search</button>
    </div>
  </section>
</header>

          <Search/>
      </div>
  );
}

export default App;
