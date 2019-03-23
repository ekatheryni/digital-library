import React from 'react'
import './style.scss'

function Button({raised, ...props}) {
    return <button className={'button' + (raised ? ' raised': '')} {...props}/>
}

export default Button