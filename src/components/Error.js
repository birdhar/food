import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='error-container'>
             <h1 className='section-title'>Oops! Page doesn't exist</h1>
             <Link to='/'>
                <button className='btn'>GO TO HOME</button>
            </Link>
        </div>
    )
   
}

export default Error