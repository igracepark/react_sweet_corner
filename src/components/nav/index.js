import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export default props => (
    <ul className='main-nav'>
        <li>
            <Link to='/'>HOME</Link>
        </li>
        <li>
            <Link to='/about'>ABOUT US</Link>
        </li>
        <li>
            <Link to='/services'>SERVICES</Link>
        </li>
        <li>
            <Link to='/contact'>CONTACT</Link>
        </li>
    </ul>
)