import React from 'react'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div className="home">
            <h1>Welcome to to Food's Kitchen</h1>
            
            <Link to='/menu'>
                <button className='btn'>GO TO MENU</button>
            </Link>
        </div>
    )
}

export default Home