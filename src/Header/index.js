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
            
<<<<<<< HEAD
=======
                <li>
                    <Link to='/'>
                        
                    </Link>
                </li>

                <li>
                    <Link to='/student'>
                        
                    </Link>
                </li>

                <li>
                    <Link to='/librarian'>
                        
                    </Link>
                </li>
>>>>>>> 589077ba834a0dcd810292b0c9ed4fc3788e7d3f
            </ul>
        </header>
    )    
}

export default Header