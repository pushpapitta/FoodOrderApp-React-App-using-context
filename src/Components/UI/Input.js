//for rendering the input

import React from 'react';
import classes from './Input.module.css';

//imported React to wrap React.forwardRef arount the input component,2nd arument as ref
//this ref is forwarded to <input ref= {ref},this is then used in mealform <Input ref={amounti/p ref}

//for this i/p component,when it is used- input prop whic holds input object (config data for the i/p)
//to pass all other config data for this input we use spreadoperator.ensures tht all key value pairs
//of input object which we recieved on props.input.id on label

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    );
});
export default Input;