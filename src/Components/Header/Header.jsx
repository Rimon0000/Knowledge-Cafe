import React from 'react';
import './Header.css'
import logo from '../../images/logo.jpg'

const Header = () => {
    return (

        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
               <img src={logo} alt="" />
            </div>
        </nav>
        

    );
};

export default Header;