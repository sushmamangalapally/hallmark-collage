/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState, Fragment }  from "react";

function Dropdown({title, subTitle, updateFunction, array, category, ulId, fontFam, placement, fontColor, gBackgroundColor}) {
    // updateFunction = updateFunction.bind(this);
    console.log(updateFunction)

    console.log(array)
    // const arrObj = Object.keys(obj);
    const expandMenu = (event) => {
        const ENTER_KEY_CODE = 13;
        const DOWN_ARROW_KEY_CODE = 40;
        const UP_ARROW_KEY_CODE = 38;
        const ESCAPE_KEY_CODE = 27;
        console.log('expandMenu')
        console.log(event);
        console.log(this);
        console.log(event.target.parentElement.querySelector('ul'));
        if (ENTER_KEY_CODE === event.keyCode) {
            event.target.parentElement.querySelector('ul').setAttribute('style', 'display: block');
        }
        else if (ESCAPE_KEY_CODE === event.keyCode) {
            event.target.parentElement.querySelector('ul').setAttribute('style', 'display: none');
        }
    }
    const goUpDown = (event) => {
        console.log(event)
        console.log(event.currentTarget)
        console.log(event.target)
        let key = event.keyCode;
        if (event.keyCode === 40) {
            if (event.currentTarget.nextElementSibling) {
                event.currentTarget.nextElementSibling.focus();
            }
        }
        if (event.keyCode === 38) {
            if (event.currentTarget.previousElementSibling) {
                event.currentTarget.previousElementSibling.focus();
            }
        }
        if (event.keyCode === 13) {
            // updateFunction();
        }
        console.log(key);
        if (event.currentTarget.classList.contains('last')) {
            console.log(event.currentTarget)
            console.log(event.currentTarget.parentElement)
            // debugger;
            const ul = event.currentTarget.parentElement;
            if (key === 9) {
                ul.setAttribute('style', 'display: none');
            }
        }
        console.log('goupdow ')
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
                    onKeyDown={expandMenu}
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
                    // const arrLen = array.length;
                    array.map((ele, index) => 
                        <li
                            role="option"
                            aria-selected="true"
                            onClick={updateFunction}
                            id={ele.id}
                            key={ele.id}
                            data-value={ele.value}
                            className={((array[index+1] ? 'menu-item' : 'menu-item last'))}
                            onKeyDown={goUpDown}
                            tabindex="1"
                            style={{
                                fontFamily:
                                    ((category === 'font') ? ele.value + ", monospaced" : ''),

                                backgroundColor: ((category === 'font-color' || category === 'background-color') ? ele.value : '')
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

