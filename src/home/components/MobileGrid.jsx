import React from 'react'
import Earth from '../../assets/mobile/image-deep-earth.jpg'
import Night from '../../assets/mobile/image-night-arcade.jpg'
import Soccer from '../../assets/mobile/image-soccer-team.jpg'
import Grid from '../../assets/mobile/image-grid.jpg'
import Above from '../../assets/mobile/image-from-above.jpg'
import Borealis from '../../assets/mobile/image-pocket-borealis.jpg'
import Curiosity from '../../assets/mobile/image-curiosity.jpg'
import Fishy from '../../assets/mobile/image-fisheye.jpg'
import "./MobileGrid.css"


const MobileGrid = () => {
  return (
    <div className='grid-mobile'>
      <p>Our Creations</p>
      <div className="images">
        <div className="image-container">
          <img src={Earth} alt="" />
          <span>Deep Earth</span>
        </div>
        <div className="image-container">
          <img src={Night} alt="" />
          <span>Night Arcade</span>
        </div>
        <div className="image-container">
          <img src={Soccer} alt="" />
          <span>Soccer Team VR</span>
        </div>
        <div className="image-container">
          <img src={Grid} alt="" />
          <span>The Grid</span>
        </div>
        <div className="image-container">
          <img src={Above} alt="" />
          <span>From up Above VR</span>
        </div>
        <div className="image-container">
          <img src={Borealis} alt="" />
          <span>Pocket Borealis</span>
        </div>
        <div className="image-container">
          <img src={Curiosity} alt="" />
          <span>The Curiosity</span>
        </div>
        <div className="image-container">
          <img src={Fishy} alt="" />
          <span>Make it Fisheye</span>
        </div>

      </div>
      <button className='button-see'>See All</button>
    </div>
  )
}

export default MobileGrid