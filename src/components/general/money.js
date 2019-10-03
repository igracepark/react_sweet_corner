import React from 'react';

export default props => {
    const dollar = props.money / 100;
    
    if (!dollar) {
        return <div>$0.00</div>;
}
    return(
        <div className='d-inline'>
            ${(dollar).toFixed(2)}
            </div>  
    )
}

