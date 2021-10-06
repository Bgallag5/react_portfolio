import React from "react";
import { Link } from "react-router-dom";

export default function PortfolioCard(props) {
  return (
    <>
      <li className="cards__item">
        <a className="cards__item__link" href={props.href} target='__blank'>
          <figure className="cards__item__pic-wrap" data-category = {props.label}>
            <img 
            src={props.src}
            alt="Project 1" 
            className="cards__item__img"
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text} </h5>
          </div>
        </a>
      </li>
    </>
  );
}
