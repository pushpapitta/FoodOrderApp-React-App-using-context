import { useContext } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../Store/cart-context';

//this function return a list of meal items,2 div's side by side (name,description,amount)
// {props.name} when we use this in AvailableMeals.js propsName 'name which u gave here
//shd match with the prop name u give there

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    //fixed to 2 decimal places
    const price = `$${props.price.toFixed(2)}`;
    //reaching out to contxt
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
            </div>
        </li>
    );


};
export default MealItem;