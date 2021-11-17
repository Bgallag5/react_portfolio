import React, { useState } from "react";
import Collapsible from "react-collapsible";

export default function PortfolioCard(props) {
  return (
    <div className="column is-6">
      <li className="cards__item">
        <a className="cards__item__link" href={props.href} target="__blank">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img src={props.src} alt="Project 1" className="cards__item__img" />
          </figure>
          <div className="cards__item__info">
            <Collapsible
              trigger="Details &#9660;"
              className="text-collapse"
            >
              <h5 className="cards__item__text p-3">{props.text} </h5>
            </Collapsible>
          </div>
        </a>
      </li>
    </div>
  );
}
