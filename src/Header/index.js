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
            
                <li>
                    <Link to='/'>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='/student'>
                        Student
                    </Link>
                </li>

                <li>
                    <Link to='/librarian'>
                        Librarian
                    </Link>
                </li>
            </ul>
        </header>
    )    
}

export default Header