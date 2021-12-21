import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import SingleItem from './SingleItem';
import { Link } from 'react-router-dom'


const FoodList = () => {
    const {loading, foods, totalAmount, getTotal} = useGlobalContext();

    if (loading) {
        return <Loading/>
    }
    return (
        <section className='section'>
          <h2 className='section-title'>Menu</h2>
          <div className='foods-center'>

            {foods.map((item)=>{
               return (
                <SingleItem key={item.id} {...item}/>
               )
            })}
          </div>
          <div className='total'>
          <h3 >Total Amount: {totalAmount}</h3>
          <Link to='/checkout'>
              <button className='btn'>Checkout</button>
            </Link>
          </div>
        </section>
      )
}

export default FoodList