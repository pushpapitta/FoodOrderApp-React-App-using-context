import React from 'react';
//this manages the cart wide data
//cartContext is an object with 2 attributes n 2 functions here
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => { },
    removeItem: (id) => { }
});
export default CartContext;

//now that context is created,we needto manage this in some component(so we need useState or useReduce)
//For adding cart items,we need to go to provider,coz this is where we managet he data at the end.