import React from 'react'
import '../index.css'
import whatsApp from '../img/whatsapp.svg'
import nigeriaFlag from '../img/N-flag.svg'

const Index = () => {
  return (
    <>
      <div className='header'>
        <div className="subHeader">
          <div className="header-content h-left">
            <a href="#" className='aContent'>Cost Calculator</a>
            <a href="#" className='aContent'>Discover Stories</a>
            <a href="#" className='aContent'>Track Orders</a>
          </div>
          <div className="header-content h-right">
            <a href="#" className='aContent'>
              Need help? Call <span className='aDetail'>+2348091084333</span>
            </a>
            <a href="#" className='aContent'>
              <img src={whatsApp} alt="" />
            </a>
            <button className='headerBtn aContent'>
              <img src={nigeriaFlag} className="flag" /> Nigeria
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index