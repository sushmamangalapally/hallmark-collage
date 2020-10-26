import React, { Component, useState, useEffect } from "react";
// import Photos from "./Photos";
// import Collage from "./Collage";
import GoogleFontLoader from "react-google-font-loader";

const LoadFont = () => (
  <>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, "400i"]
            },
            {
              font: "Fjalla One",
              weights: [400, 700]
            },
            {
              font: "Lobster",
              weights: [400, 700]
            },
            {
              font: "Abel",
              weights: [400, 700]
            },
            {
              font: "Fredoka One",
              weights: [400, 700]
            },
            {
              font: "Varela Round",
              weights: [400, 700]
            },
            {
              font: "Dancing Script",
              weights: [400, 700]
            },
            {
              font: "Shadows Into Light",
              weights: [400, 700]
            },
            {
              font: "Amatic SC",
              weights: [400, 700]
            },
            {
              font: "Amiri",
              weights: [400, 700]
            },
            {
              font: "Patua One",
              weights: [400, 700]
            },
            {
              font: "Permanent Marker",
              weights: [400, 700]
            }
          ]}
          subsets={["cyrillic-ext", "greek"]}
        />
  </>
);

export default LoadFont;
