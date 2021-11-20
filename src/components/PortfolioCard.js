import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";

export default function PortfolioCard(props) {
  return (
    <div className="column is-6">
      <li className="cards__item">
        <div className="cards__item__link">
          <a href={props.href} target="__blank" className='cards__item__link'>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project 1" className="cards__item__img" />
          </figure>
          </a>
          <div className="cards__item__info">
            <Collapsible
              trigger="Details &#9660;"
              className="text-collapse"
              transitionTime='200'
            >
              <h5 className="cards__item__text p-3">{props.text} </h5>
              <a href= {props.code} target="__blank" >Code</a>
            </Collapsible>
          </div>
        </div>
      </li>
    </div>
  );
}
