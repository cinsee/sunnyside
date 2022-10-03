import React from 'react'
import imgMilk from '../assets/images/desktop/image-gallery-milkbottles.jpg'
import imgOrange from '../assets/images/desktop/image-gallery-orange.jpg'
import imgCone from '../assets/images/desktop/image-gallery-cone.jpg'
import imgSugar from '../assets/images/desktop/image-gallery-sugarcubes.jpg'

function Gallery() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
        <img src={imgMilk} alt="milk" />
        <img src={imgOrange} alt="orange" />
        <img src={imgCone} alt="cone" />
        <img src={imgSugar} alt="sugar" />

    </div>
  )
}

export default Gallery