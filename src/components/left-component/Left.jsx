import React from 'react'
import simple_to_image from '../../assets/simple_to_image.png'

const Left = () => {
  return (
    <div className='left'>
      <img  className='left-image' src={simple_to_image} alt="" />
      <input type="text" placeholder='Whats on your mind...' />
      <br />
      <button>Add to do</button>
    </div>
  )
}

export default Left