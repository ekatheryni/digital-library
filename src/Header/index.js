import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

function Header() {
    return (
        <header className='header'>
            <div className='sitename'>
                <img src={require('../assets/logo.svg')} />
                <span>
                    Digital Library
                </span>
            </div>
            <ul className='menu'>
            
            </ul>
        </header>
    )    
}

export default Header