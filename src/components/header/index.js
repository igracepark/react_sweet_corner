import React from 'react';
import './header.scss';
import Nav from '../nav';
import header from '../../assets/images/header.png';

export default props => (
    <div>
        <img className='headerImg' src={header}/>
        <Nav className='navBar'/>
        <div className='logobg' />
        <div className="allura center">We deliver cupcakes for the important events in your life!</div>
        <div className='divider'/>
    </div>
);
