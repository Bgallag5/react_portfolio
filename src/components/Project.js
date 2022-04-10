import React from "react";

export default function Project({ props }) {
  const { title, imgSrc, deployed, code, description, quip, className } = props;

  return (
    <div className="project__section" id={`section--#`}>
      <div className="section__title">
        <h2 className="section__description">{title}</h2>
        {/* <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3> */}
      </div>
      <div className={`section__content ${className}`}>
          <a href={deployed} target="_blank" rel="noreferrer">
        <div className="img__container">
            <img
              src={require(`../assets/images/${imgSrc}`).default}
              data-src={require(`../assets/images/${imgSrc}`)}
              alt="Computer"
              className="project__img"
            />
        </div>
          </a>
        <div className="project__description">
          <h5 className="project__quip">{quip}</h5>
          <p>{description}</p>
          <small className="code__link"><a href={code} target="_blank" rel="noreferrer">code: {code}</a></small>
        </div>
      </div>
    </div>
  );
}

//props = {imgSrc, title, description, deployedLink, codeLink, L/R layout var}
