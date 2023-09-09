import React from 'react'
import TwitterIcon from '../img/twitterIcon.svg'

const Cards = ({name, user, text}) => {
  return (
    <>
      <div className="card">
        <div className="imgIcon">
            <img src={TwitterIcon} alt="" className='twitterIcon' />
          <div className="user">
            {name}
            <a href="#">{user}</a>
          </div>
        </div>
        <p className='cardText'>{text}</p>
      </div>
    </>
  );
}

export default Cards