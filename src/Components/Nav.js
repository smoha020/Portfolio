import React from 'react'
import { Link } from 'react-router-dom' 

function Nav(props) {

    return (
        <div className='nav'>
            <div className='nav-name'>NAV NAME</div>
            <div className='nav-options'>
                <Link to='/'><div className='profile'>PROFILE</div></Link>
                <Link to='/Projects'><div className='projects'>PROJECTS</div></Link>
                <Link to='/youtube'><div className='youtube'>YOUTUBE</div></Link>
            </div>
        </div>
    )
}

export default Nav