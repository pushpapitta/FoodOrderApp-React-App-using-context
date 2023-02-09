//here we add a cartProvider Component -the goal of this component is to manage the cart Context data
//and provide that cartContext to all components that want access to it.

import { useReducer } from 'react';
import CartContext from "./cart-context";

//object where we say there are no items,0 amount
const defaultCartState = {
    items: [],
    totalAmount: 0
};
//state(last state snapshot of the state managed by reactreducer) ,we manage the action
//this reducer will then return a newstate
//updatedItems is an array,on item-call concat-which add new item to array-it dosnt edit existing array
//but returns new array
//we are updating our state in an immutable way.

const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART_ITEM') {

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) =>
            item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];


        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };

            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {

            updatedItems = state.items.concat(action.item);
        }


        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE_CART_ITEM') {

        //finding item no.
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        //finding item itself
        const existingItem = state.items[existingCartItemIndex];
        //updated total amount
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

//CartContext will be accesable by all children wrapperd by this provider
const CartProvider = (props) => {

    //usereducer returns exactly array with 2 elemets-1st element is always the state snapshot
    //2nd-function which allows u to dispatch an action.

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //whenever this is called,we get item that needs to be added to cart,
    //then we need to check-if that item is already in cart(update it),or it is a new item
    //we need to mangage this thing as - whole state of component,so any components affected byt his
    //cartContext will be re-evaluated,whenever cart data changes.(usestate/useReducer)

    //(item :item is coming from argument (item)
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE_CART_ITEM', id: id });
    };

    //cartContext is an object-this object will be set as avalue to cartcontext provider
    //we use cartState(items:cartState,items and totalamount) here to get data dynamically-
    //then start dispatching action
    //we will add item to cart from mealitem form
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,

    };
    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
};
export default CartProvider;