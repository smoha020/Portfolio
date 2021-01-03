import React from 'react'
import Reach from '../Images/Reach.png'
import eMarket from '../Images/eMarket.png'
import { Link } from 'react-router-dom'

function Projects(props) {

    return (
        <div className='pic-cont'>
            <div className='pic'><Link to='https://floating-bayou-28094.herokuapp.com/'><img src={Reach} alt='png' /></Link></div>
            <div className='pic'><Link to='https://floating-fortress-19327.herokuapp.com/'><img src={eMarket} alt='png' /></Link></div>
        </div>
    )
}

export default Projects