import React from 'react'
import microsoft from '../img/microsoft.png'

const Online = () => {
  return (
    <>
      <div className="onlineDiv">
        <div className="onlineTop">
          Nigeria’s No. 1 online print shop <span>👑</span>
        </div>
        <div className="onlinePara">
          Our print services and solutions are trusted by these brands and over
          15,000 other businesses in Nigeria.
        </div>
        <div className="onlineCompany">
            <img src={microsoft} alt="microsoft Logo" className='onlineImg' />
        </div>
      </div>
    </>
  );
}

export default Online