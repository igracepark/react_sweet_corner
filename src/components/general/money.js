import React from 'react';

export default props => {
    const dollar = props / 100;
    return(
        <div>
            ${(dollar).toFixed(2)}
            </div>  
    )
}

