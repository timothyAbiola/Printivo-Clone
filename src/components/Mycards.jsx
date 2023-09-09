import React from 'react'

const Mycards = ({title, price, per, anchorText, image}) => {
  return (
    <>
        <div className="cardItem">
            <div className="boxHolder">
                <img src={image} alt="" className="box" />
            </div>
            <div className="cardSmall">
                <h3 className="tbc">{title}</h3>
                <p className="starting">STARTING AT</p>
                <h3 className="price">
                {price} <span className="priceSpan">{per}</span>
                </h3>
                <a href="" className="anchorButton">
                <span className="anchorItem">{anchorText}</span>
                <i class="fa-solid fa-greater-than gt"></i>
                </a>
            </div>
      </div>
    </>
  );
}

export default Mycards