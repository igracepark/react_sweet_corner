import React from 'react';

export default props => {
    const dollar = props.money / 100;

    return(
        <div className='d-inline'>
            ${(dollar).toFixed(2)}
            </div>  
    )
}

