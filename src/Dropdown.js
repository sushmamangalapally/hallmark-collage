/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, useEffect, useState, Fragment }  from "react";

function Dropdown({title, subTitle, updateFunction, array, category, ulId}) {
    // updateFunction = updateFunction.bind(this);
    console.log(updateFunction)

    console.log(array)
    // const arrObj = Object.keys(obj);
  return (
    <div className="row">
        {/* <p className="adjustment">{title}</p> */}
        <div className="dropdown">
            <div className="btn-group dropdown dropdown-content">
                <a
                    href="#"
                    className="btn dropdown-toggle"
                    tabIndex="0"
                >
                    {subTitle}
                    <i className="icon icon-caret"></i>
                </a>
                <ul
                    id={ulId}
                    className="menu dropdown-content"
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
        </div>
    </div>
  );
}

export default Dropdown;

