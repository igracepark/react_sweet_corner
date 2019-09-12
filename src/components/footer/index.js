import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './footer.scss'
import footerDots from '../../assets/images/dots-footer.png';

export default props => {
    const year = new Date().getFullYear();
  return (
      <div>
          <footer className='row'>
                <div className='dots col-md-3 '> 
                <img src={footerDots}/>
                </div>
                <div 
                className ='col-md-6 mt-4 center'>
                Copyright&copy; {year} SweetCorner All rights reserved
                </div>
                <div 
                className ='col-md-3 center phoneimg'>
                800 264 2099
                </div>
          </footer>
      </div>
  );
}
