//to render all cart items and also display total amount/
//buttons for leaving the cart and to order
import { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';
//we want to render this cart in a modal using portals

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    //totalamount which shd be outputted
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    //order Button to be shown up only when items in the cart
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    //placing all the cartitems in an un-ordered list- javascript expression
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )
            )}
        </ul>
    );

    //the cart should be inside of the modal wrapper

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>
                    Close
                </button>
                {hasItems && <button classNmae={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};
export default Cart;