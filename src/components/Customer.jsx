import React from 'react'
import Cards from './Cards';

const Customer = () => {
  return (
    <>
      <div className="customerDiv">
        <p className='cust'>
          What Customers Say About Us <span>🙌🏾</span>
        </p>
      </div>
      <div className='cardContainer'>
        <Cards
          name="Amina Elebe"
          user="@DeliciousAmina"
          text="I am now the unofficial @Printivo ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!"
        ></Cards>
        <Cards
          name="Oluwatosin"
          user="@tosingirlfx"
          text="@Printivo delivered my mugs in 24hrs. Thank you so much! It's nice doing business with you. More to come."
        ></Cards>
        <Cards
          name="Oluwatosin"
          user="@olgablark"
          text="These guys @Printivo are really awesome and affordable. Excellent customer service and delivery too. Thank you."
        ></Cards>
      </div>
    </>
  );
}

export default Customer