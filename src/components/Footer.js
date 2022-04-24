import React from 'react';
import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import GitHub from '../images/GitHub.png';
import Instagram from '../images/Instagram.png'



export default function Footer(){
    return (
        <div className='footer'>
            <img src={Facebook} className='facebook' alt="facebook"></img>
            <img src= {Twitter} className='twitter' alt="twitter"></img>
            <img src={GitHub} className='github' alt="github"></img>
            <img src={Instagram} className='instagram' alt="instagram"></img>
        </div>
    )
}