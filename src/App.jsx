import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Index from "./components/";
import Frontview from "./components/Frontview";
import Animate from "./components/Animate";
import Mycards from "./components/Mycards";
import twoSided from "./img/twoSided.png"
import flyer from "./img/a5-flyers.png"
import round from "./img/roundStickers.png"
import simpleMugs from "./img/simpleMugs.png"
import postCards from "./img/postCards.jpg"
import rollUp from "./img/rollUp.png"
import poster from "./img/A2Posters.png"
import trifold from "./img/TrifoldBrochres.png"
import landscape from "./img/LandscapeId.jpg"
import offWhite from "./img/offWhiteT-Shirts.png"
import Branded from './img/A4Branded.png'
import Courier from './img/A4Courier.jpeg'
import Greeting from './img/GreetingCards.png'
import Stickers from './img/Stickers.png'
import Online from "./components/Online";
import Customer from "./components/Customer";


function App() {

  return (
    <>
      <Index></Index>
      <Frontview></Frontview>
      <Animate></Animate>
      <div className="categories">
        <div className="cart">
          <h3 className="popular">Popular Products</h3>
          <a href="#" className="seeAll">
            See All Products
          </a>
        </div>
        <div className="myCard">
          <Mycards
            title="Two-sided Business Cards"
            price="#9,700"
            per="per 100"
            anchorText="Browse Two-sided Bu..."
            image={twoSided}
          ></Mycards>
          <Mycards
            title="A5 flyers (Single Sided)"
            price="#16,500"
            per="per 100"
            anchorText="Browse A5 flyers (S..."
            image={flyer}
          ></Mycards>
          <Mycards
            title='Round Stickers (3.5" Dia'
            price="#10,900"
            per="per 100"
            anchorText="Browse Round Sticke..."
            image={round}
          ></Mycards>
          <Mycards
            title="Simple Mugs"
            price="#3,000"
            per="per 1"
            anchorText="Browse Simple Mugs..."
            image={simpleMugs}
          ></Mycards>
          <Mycards
            title="Postcards (A6)"
            price="#14,200"
            per="per 50"
            anchorText="Browse Postcards (A..."
            image={postCards}
          ></Mycards>
          <Mycards
            title="Roll Up Banners (Big Base)"
            price="#35,200"
            per="per 1"
            anchorText="Browse Roll Up Bann..."
            image={rollUp}
          ></Mycards>
          <Mycards
            title="A2 Posters"
            price="#45,500"
            per="per 100"
            anchorText="Browse A2 Posters..."
            image={poster}
          ></Mycards>
          <Mycards
            title="Trifold Brochures"
            price="#30,400"
            per="per 100"
            anchorText="Browse Trifold Broc..."
            image={trifold}
          ></Mycards>
          <Mycards
            title="Landscape ID Cards"
            price="#2,000"
            per="per 1"
            anchorText="Browse Landscape ID..."
            image={landscape}
          ></Mycards>
          <Mycards
            title="Off White T-shirts"
            price="#3,800"
            per="per 1"
            anchorText="Browse Off White T-..."
            image={offWhite}
          ></Mycards>
          <Mycards
            title="A4 Branded Paper Bags"
            price="#67,000"
            per="per 100"
            anchorText="Browse A4 Branded P..."
            image={Branded}
          ></Mycards>
          <Mycards
            title="A4 Courier"
            price="#17,600"
            per="per 100"
            anchorText="Browse A4 Courier B..."
            image={Courier}
          ></Mycards>
        </div>
      </div>
      <div className="categories">
        <div className="cart">
          <h3 className="popular">Popular Categories</h3>
          <a href="#" className="seeAll">
            See All Categories
          </a>
        </div>
        <div className="myCard">
          <Mycards
            title="Greeting Cards"
            price="#19,000"
            per="per 50"
            anchorText="Browse Greeting Car..."
            image={Greeting}
          ></Mycards>
          <Mycards
            title="Stickers"
            price="#5,400"
            per="per 75"
            anchorText="Browse Stickers..."
            image={Stickers}
          ></Mycards>
        </div>
      </div>
      <Online></Online>
      <div className="customerContainer">
        <Customer></Customer>
      </div>
    </>
  );
}

export default App;
