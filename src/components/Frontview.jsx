import React from 'react'
import NextNav from './NextNav'
import Img from '../img/printivo-hand-card.webp'

const Frontview = () => {
  return (
    <>
      <div className="main-view">
        <NextNav></NextNav>
        <div className="prints">
          <div className="print-left">
            <h1 className="qp">Quality prints</h1>
            <h3 className="shipped">Shipped to your doorstep</h3>
            <form action="" className='form'>
              <label htmlFor="input" className='label'>What would you like to print today? </label>
              <input type="text" id="input" placeholder='Search for Business cards, T-shirts, Mugs, etc'/>
              <i class="fa-solid fa-magnifying-glass item-search"></i>
            </form>
          </div>
          <div className="print-right">
            <img src={Img} alt="" className="print-card" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontview