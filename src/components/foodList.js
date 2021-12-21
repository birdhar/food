import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import SingleItem from './SingleItem';


const FoodList = () => {
    const {loading, newFoods, foods} = useGlobalContext();

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
        </section>
      )
}

export default FoodList