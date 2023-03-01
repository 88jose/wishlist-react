import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import logo from '../../assets/img/logo.svg'

export const Navbar = () => {
    return (
        <div className='section-navBar'>
            <NavLink to='/'><img src={logo} alt="" /></NavLink>
            <div className='nav-links'>
                <NavLink to='/pending'>Pending</NavLink>
                <NavLink to='/progress'>Progress</NavLink>
                <NavLink to='/completed'>Comleted</NavLink>
            </div>
        </div>
    ) 
}
