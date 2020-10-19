import React, { Component, useState } from "react";

const SearchTerm = ({searchTerm, onSearchInput}) => (
    <input
        type="text"
        onChange={(e) => onSearchInput(e.target.value)}
        placeholder="Search Pictures"
        className="form-input"
        id="adding_photos_text"
        value={searchTerm}
    />
);


export default SearchTerm;
