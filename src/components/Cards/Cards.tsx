import React from "react";
import "./Cards.scss";

interface ICardsProps {
  imgSrc: string;
  heading?: string;
  para?: string;
  onClick?: any;
}

const Cards = ({ imgSrc, heading, para, onClick }: ICardsProps) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={imgSrc} alt="img" style={{ width: "100%" }} />
      <div className="container">
        {heading && (
          <h4>
            <b>{heading}</b>
          </h4>
        )}

        {para && <p>{para}</p>}
      </div>
    </div>
  );
};

export default Cards;
