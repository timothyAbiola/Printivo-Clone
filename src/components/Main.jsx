import React from 'react'

const Main = () => {
  return (
    <>
      <div className="mainSection">
        <main className="subHeader subMain">
          <div className="mainNav">
            <a href="#" className="homeNav">
              Home /
            </a>
            <span className="navCost">Cost Calculator</span>
          </div>
          <div className="mainContainer">
            <div className='mainMarg'>
                    <h1 className='pqc'>Print Quote Calculator</h1>
                <div>
                    <div>
                        Select a Category.
                        <select name="" id="">
                        <option value="Business Cards">Business Cards</option>
                        <option value="Letterhead">Letterhead</option>
                        <option value="Envelops">Envelops</option>
                        <option value="Greeting Cards">Greeting Cards</option>
                        <option value="Flyers & Handbills">Flyers & Handbills</option>
                        <option value="Bags">Bags</option>
                        <option value="Wedding Stationary">Wedding Stationary</option>
                        <option value="Stickers">Stickers</option>
                        <option value="Notepads and Jotters">Notepads and Jotters</option>
                        <option value="Mugs">Mugs</option>
                        <option value="Banners & Large Format">Banners & Large Format</option>
                        <option value="Posters">Posters</option>
                        <option value="Presentation Folders">Presentation Folders</option>
                        <option value="Brochures">Brochures</option>
                        <option value="Id Cards">Id Cards</option>
                        <option value="Corporate Gifts">Corporate Gifts</option>
                        <option value="Calenders">Calenders</option>
                        <option value="Caps & Hats">Caps & Hats</option>
                        <option value="Frames & Wall Arts">Frames & Wall Arts</option>
                        <option value="Promotional Items">Promotional Items</option>
                        <option value="ClothesTag">ClothesTag</option>
                        <option value="Labels">Labels</option>
                        <option value="Umbrella">Umbrella</option>
                        <option value="Campaign Materials">Campaign Materials</option>
                        <option value="Clothing & Apparel">Clothing & Apparel</option>
                        </select>
                    </div>
                    <div></div>
                </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Main