import React from 'react';
import './Gallery.css'
import photo1 from '../../assets/1.jpeg'
import photo2 from '../../assets/2.jpeg'
import photo3 from '../../assets/3.jpeg'
import photo4 from '../../assets/4.jpeg'
import photo5 from '../../assets/5.jpeg'
import rightArrow from '../../assets/right-arrow.png'

const Gallery = () => {
  return (
    <div className='main_gallery'>
      <div className='gallery'>
        <img src={photo1} alt=''/>
        <img src={photo2} alt=''/>
        <img src={photo3} alt=''/>
        <img src={photo4} alt=''/>
        <img src={photo5} alt=''/>
      </div>
      <button className='btn dark-btn'>
        See More Here
            <img src={rightArrow} alt=''/> 
       </button>
    </div>
  )
}

export default Gallery