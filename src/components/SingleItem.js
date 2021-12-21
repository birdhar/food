import React from 'react'
import { useGlobalContext } from '../context'

const SingleItem = ({id, title,itemAmount, price, img}) => {
  const {increase, decrease} = useGlobalContext();
  return (
    <article className='food'>
      <div className='img-container'>
        <img src={img} alt={title}></img>
      </div>
      <div className='food-footer'>
         <h4>{title}</h4>
         <h5>Price: {price}</h5>
      </div>
      {/* increase amount */}
      <div className='btnContainer'>
      <button className="btn" onClick={()=> increase(id)}>+</button>
      <h5>{itemAmount}</h5>
        <button className="btn" onClick={()=> decrease(id)}>-</button>
      </div>
      
    </article>
    
  )
}

export default SingleItem