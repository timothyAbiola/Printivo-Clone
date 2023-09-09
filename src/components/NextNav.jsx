import React from 'react'
import printivoImg from '../img/printivoImg.svg'
import cart from '../img/cart.svg'

const NextNav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="subHeader">
          <img src={printivoImg} alt="printivo Logo" className='print' />
          <div className='navHolder'>
            <a href="#"className='navItem'>All Products</a>
            <a href="#" className='navItem'>Become a Reseller</a>
            <a href="#"className='navItem'>Merch Store</a>
            <a href="#"className='navItem'>MarketPlace</a>
            <div className='navAccount'>
              <button className='signIn'>Sign in</button>
              <a href="#" className='navItem'>Create Account</a>
            </div>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NextNav