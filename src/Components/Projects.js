import React from 'react'
import Reach from '../Images/Reach.png'
import eMarket from '../Images/eMarket.png'

function Projects(props) {

    return (
        <div className='pic-cont'>
            <div className='pic'>
                <a href='https://floating-bayou-28094.herokuapp.com/'>
                    <div className='pic-sub'>
                        <img src={Reach} alt='png' />
                    </div>
                    <div className='middle'>
                        <h3>Tools/Skills</h3>
                        <p>MERN</p>
                        <p>Redux</p>
                        <p>Material UI</p>
                        <p>Passport js</p>
                    </div>
                </a>
            </div>
            <div className='pic'>
                <a href='https://floating-fortress-19327.herokuapp.com/'>
                    <div className='pic-sub'>
                        <img src={eMarket} alt='png' />
                    </div>
                    <div className='middle'>
                        <h3>Tools/Skills</h3>
                        <p>Stripe API</p>
                        <p>React</p>
                        <p>Express js</p>
                        <p>Redux</p>
                        <p>Bootstrap</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects