import { Fragment } from 'react';

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
//onClick is given to customcomponent,this onclick is not builtin,we gvae it.

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div classname={classes['main-image']}>
                <img src={mealsImage} alt='Table full of Delicious Food!' />
            </div>
        </Fragment>
    );
};
export default Header;