//which allows mealItems to add to the cart

import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

//here we will render a form which will have input and a button
//input will be wrapped in a seperate component(re-usable)
//all below are the defaults which u can add to input.

const MealItemForm = (props) => {

    //to check whether the form is valid or not
    const [amountIsValid, setAmountIsValid] = useState(true);
    //this will be passed to ref prop in Input,since the Input is custom component,some extra work
    //is needed
    const amountInputRef = useRef();
    //we want to extract the amount,for that we r using ref's
    //const enteredAmount = amountInputRef.current.value;
    //const enteredAmountNumber = +enteredAmount;(converting a string number to number number)
    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };
    return <form classname={classes.form} onSubmit={submitHandler}>
        <Input ref={amountInputRef}
            label='Amount'
            input={{

                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'

            }}
        />
        <button >+ Add</button>
        {!amountIsValid && <p>Enter a valid amount(1-5)</p>}
    </form>
};
export default MealItemForm;