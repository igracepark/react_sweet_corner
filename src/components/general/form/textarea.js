import React from 'react';
import { Field } from 'redux-form';

export default props => (
    <div className="input-field">
        <Field 
            name="message" 
            component="textarea" 
            placeholder="Message"
            type="text"
            className="inputField"
            pattern="^(.{1,1000})$"
            required
            />
    </div>
)

