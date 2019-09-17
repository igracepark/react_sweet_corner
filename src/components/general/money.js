import React from 'react';

export default props => {
    const dollar = props / 100;
    console.log('money props', props);
    return(
        <div>
            ${dollar}
            </div>  
    )
}

