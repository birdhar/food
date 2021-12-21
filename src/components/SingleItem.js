import React from 'react'

const SingleItem = ({name, img}) => {
  return (
    <article className='food'>
      <div className='img-container'>
        <img src={img} alt={name}></img>
      </div>
      <div className='food-footer'>
         <h3>{name}</h3>
      </div>
    </article>
    
  )
}

export default SingleItem