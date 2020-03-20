import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    let inputElement = null;
    const inputClasses = [classes.Input];

    if(props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    // На случай добавления других типов ввода
    switch(props.elementType){
        case 'input':
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }

    let validationError =  null;
    if(props.invalid && props.touched) {
        validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label} htmlFor={props.id}>{props.label}</label>
            {inputElement}
            {validationError}
        </div>
    )
}

export default Input;