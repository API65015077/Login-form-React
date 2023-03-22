import React from 'react'
import banana from '../img/art.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'> Soup's </span>
            <div className='user'>
                <img src={banana} alt="" />
                <span> Paint </span>
                <button>logout</button>
            </div>
        </div>
    )
}

export default Navbar