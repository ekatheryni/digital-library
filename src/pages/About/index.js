import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import Button from '../../components/Button';

function About() {
    return(
        <div className='about-wrapper'>
            <img  className='picture' src={require('../../assets/About_pic.svg')}/>
            <div className='description'>
                <h2>
                    What is the Digital Library?
                </h2>
                <p>
                    The mission of Digital Library is to be helpful resourse for online research.
                </p>
                <p>
                    So, we create a convinient online collection of workbooks, templates and files to help students.
                </p>

                <div className='buttons'>
                    <Link to='/login'>
                        <Button raised>Log In</Button>
                    </Link> 
                    <Link to='/register'>
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About