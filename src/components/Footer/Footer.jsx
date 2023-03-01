import React from 'react'
import './Footer.css'
import iconFace from '../../assets/icons/face.png'
import iconYou from '../../assets/icons/you.png'
import iconInsta from '../../assets/icons/insta.png'

export const Footer = () => {
    return (
        <>
        <div className='section-footer'>
            <p>FOLLOW</p>
            <div className='social-icon'>
                <img src={iconFace} alt="" />
                <img src={iconYou} alt="" />
                <img src={iconInsta} alt="" />
            </div>
        </div>
        <div className='bar-footer'>
            <p>Copy</p>
        </div>
        </>
    )
}
