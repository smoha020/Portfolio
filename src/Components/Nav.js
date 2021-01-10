import React from 'react'
import { Link } from 'react-router-dom' 
import FolderIcon from '@material-ui/icons/Folder';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Nav() {

    return (
        <div className='nav'>
            <div className='nav-name'>
                <h1>Said</h1>
                <h1>Mohamed</h1>
                <div style={{color: 'black', margin: '1rem'}}>Full Stack Developer</div>
            </div>
            <div className='nav-options'>
                <Link to='/'>
                    <div className='options-sub'>
                        <AccountCircleIcon className='sub-child icon'/>
                        <p className='sub-child'>PROFILE</p>
                    </div>
                </Link>
                <Link to='/Projects'>
                    <div className='options-sub'>
                        <FolderIcon className='sub-child icon'/>
                        <p className='sub-child'>PROJECTS</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Nav