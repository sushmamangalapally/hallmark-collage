/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState, Fragment }  from "react";

function Dropdown({title, subTitle, updateFunction, array, category, ulId, fontFam, placement, fontColor, gBackgroundColor}) {
    // updateFunction = updateFunction.bind(this);
    console.log(updateFunction)

    console.log(array)
    // const arrObj = Object.keys(obj);
    const expandMenu = (event) => {
        console.log('expandMenu')
        console.log(event);
        console.log(this);
        console.log(event.target.parentElement.querySelector('a'))
    }
    const goUpDown = (event) => {
        let key = event.keyCode;
        console.log(key)
    }
  return (
    <div className="row">
        {/* <p className="adjustment">{title}</p> */}
        <div className="dropdown">
            <div className="btn-group dropdown dropdown-content">
                <a
                    href="#"
                    className="btn dropdown-toggle"
                    tabIndex="0"
                    aria-expanded="false"
                    onClick={expandMenu}
                    // id={ulId+'_a'}
                >
                    {subTitle}
                    <i className="icon icon-caret"></i>
                </a>
                <ul
                    id={ulId}
                    className="menu dropdown-content"
                    tabindex="-1"
                    role="listbox"
                            onKeyPress={goUpDown}
                >
                {
                    array.map((ele) => 
                        <li
                            role="option"
                            aria-selected="true"
                            onClick={updateFunction}
                            id={ele.id}
                            key={ele.id}
                            data-value={ele.value}
                            className="menu-item"
                            style={{
                                fontFamily:
                                    ((category === 'font') ? ele.value + ", monospaced" : ''),

                                backgroundColor: ((category === 'font-color') ? ele.value : '')
                            }}
                        >
                            <div className="list-icon">
                                <a href="#dropdowns">
                                    {((category === 'font') ? ele.value : ele.id)}
                                </a>
                            </div>
                        </li>                    
                    )
                }
                </ul>
            </div>
            <div className="display-value">
                
                    {category === 'font' ? <p style={{fontFamily: fontFam + ", monospaced"}}>{fontFam}</p> : ''}
                    {category === 'font-color' ? <p style={{color: fontColor}}>{fontColor}</p> : ''}
                    {category === 'background-color' ? <p style={{backgroundColor: gBackgroundColor}}>{gBackgroundColor}</p> : ''}
                    {category === 'placement' ? <p>{placement}</p> : ''}
                
            </div>
        </div>
    </div>
  );
}

export default Dropdown;

