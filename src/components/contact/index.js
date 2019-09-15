import React from 'react';
import './contact.scss';
import ContactForm from './contact_form'
import Schedule from '../general/schedule'
import '../contact/contact.scss';
import updots from '../../assets/images/up-dots.png';
import downdots from '../../assets/images/down-dots.png';

export default props => (
    <div className='row'>
        <div className='col-md-1'></div>
        <div className='col-md-6'>
            <h3>
                Contact us today!
            </h3>
            <p>
                Talk cupcakes to us! At Sweet Corner's we love hearing from our
                customers. Send your questions, comments and flavor
                suggestions to:
            </p>
            <p>
                <a href = "mailto: office@sweetcorner.com">office@sweetcorner.com</a>
            </p>
            <p>
                Our expert bakers are waiting to create an unique cupcake
                bursting with freshness and flavor just for you. Our management
                team are also waiting for their next event to organize.
            </p>
       
            <img className='updots-style' src={updots}/>
        </div>
        <div className='col-md-4 form-style'>
            <ContactForm/>
        </div>
       
    <div className='row schedule-style'>
    <div className='col-md-1'></div>
        <div className='col-md-6 '>
            <Schedule/>
       </div>
    <div className='col-md-5'>
         <img className='downdots-style'src={downdots}/>
   </div>
   </div>
   </div>
);
