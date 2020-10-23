/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState, Fragment }  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowDown } from '@fortawesome/free-solid-svg-icons'

function Dropdown({title, subTitle, updateFunction, array, category, ulId, fontFam, placement, fontColor, gBackgroundColor}) {
    // updateFunction = updateFunction.bind(this);
    console.log(updateFunction)

    console.log(array)
    // const arrObj = Object.keys(obj);
    const expandMenu = (event) => {
        console.log('expandMenu')
        console.log(event);
        console.log(this);
        console.log(event.currentTarget.parentElement.querySelector('a'))
        const ulListExpanded = event.currentTarget.parentElement.querySelector('ul');
        console.log(ulListExpanded)
        ulListExpanded.setAttribute('style', 'display: block');
    }
    const isSelected = (event) => {
        console.log('isSelected')
        console.log(event);
        console.log(this);

    }
    const goUpDown = (event) => {
        let key = event.keyCode;
        console.log(key)
    }
  return (
    <div className="row">
        {/* <p className="adjustment">{title}</p> */}
        <div className="dropdown">
            Select {subTitle}
            <div className="btn-group dropdown dropdown-content">
                <span
                    className="btn dropdown-toggle"
                    tabIndex="0"
                    aria-expanded="false"
                    onClick={expandMenu}
                    // id={ulId+'_a'}
                >
                    {subTitle}
                    <i className="icon icon-caret"></i>

                <FontAwesomeIcon icon={faArrowDown} />
                </span>
                <ul
                    id={ulId}
                    className="menu dropdown-content"
                    tabindex="-1"
                    role="listbox"
                    onKeyPress={goUpDown}
                    aria-expanded="false"
                >
                <li
                    role="button"
                    aria-labelledby="dropdown-label"
                    id="dropdown__selected"
                    tabindex="0"
                >
                
                    {category === 'font' ? fontFam : ''}
                    {category === 'font-color' ? fontColor : ''}
                    {category === 'background-color' ? gBackgroundColor : ''}
                    {category === 'placement' ? placement : ''}
                </li>
                {
                    array.map((ele) => 
                        <li
                            role="option"
                            aria-selected="false"
                            onClick={updateFunction}
                            id={ele.id}
                            key={ele.id}
                            data-value={ele.value}
                            className="menu-item"
                            onClick={isSelected}
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
                

<i class="fas fa-caret-down"></i>
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

