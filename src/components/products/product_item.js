import React from 'react';
import './products.scss';
import Money from '../general/money';

export default (props) => {
    const {name, thumbnail, caption, cost} = props;
    console.log('props: ', props);
        return (
       
            <div onClick={props.goToDetails} className='hov1 product-item col-md-4 center'>
                <h5 className='cupcakeTitle'>{name}</h5>
                <img src={thumbnail.url}/>
                <div>{caption}</div>
                <div>{Money(cost)}</div>
            </div>
    )
}