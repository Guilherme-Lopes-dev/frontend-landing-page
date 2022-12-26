import React from 'react'
import '../components/DesktopGrid.css'
const DesktopGrid = () => {
  return (
    <>
      <div className='view-more'>
        <h3>Our Creations</h3>
        <button className='button'>See All</button>
      </div>
      <div className="grid-container">
        <div className="grid-item-1"><p>Deep earth</p></div>
        <div className="grid-item-2"><p>Night arcade</p></div>
        <div className="grid-item-3"><p>Soccer team VR</p></div>
        <div className="grid-item-4"><p>The grid</p></div>
        <div className="grid-item-5"><p>From up above VR</p></div>
        <div className="grid-item-6"><p>Pocket borealis</p></div>
        <div className="grid-item-7"><p>The curiosity</p></div>
        <div className="grid-item-8"><p>Make it fisheye</p></div>
      </div>
    </>
  )
}

export default DesktopGrid


