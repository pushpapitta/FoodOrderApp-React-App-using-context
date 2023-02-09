//this component want to return a button-an icon,text and a batch to give no.of items in cart

import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';
//cartContext object is imported here

//here on the built-in button,we use built in onClick to hadle the function execution

const HeaderCartButton = (props) => {
    //button animation,useEffect
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    //for this we are adding another const here,reduce to transform array to single valu o/ p-
    //for that it takes 2 arguments. 1st is function which will be called for u.2nd argument is 
    //starting value which is 0 here.
    //the function whic is given as first agrument to reduce() recieves 2 arguments itself
    //automatically bu js
    const { items } = cartCtx;
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    //whenever the cartContext changes,the headercartbutton code will be re-evaluated.
    //we can now use this to o/p no. of items in cart using const numberOfcartItems above.
    //object destructuring to pull out the items from cartCtx object

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;