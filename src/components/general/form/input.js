import React from 'react';

export default props => {
    const { autoComplete = 'off', input, label, type = 'text' } = props;

    return (
        <div className="input-field">
            <label>{label}</label>
            <input {...input} type={type} autoComplete={autoComplete} />
        </div>
    );
}