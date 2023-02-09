//here we have available meals,dont need props coz we wont recieve any data here.
//for now we work with some dummy data .

import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        desription: 'Finest fish and veggies',
        price: 22.99,
    }, {
        id: 'm2',
        name: 'Schnitzel',
        description: 'Agerman speciality',
        price: 16.5,
    }, {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'Raw and meaty',
        price: 12.99,
    }, {
        id: 'm4',
        name: 'Green bowl',
        description: 'Healthy and green',
        price: 18.99
    }
];



const AvailableMeals = () => {

    //for every meal, we re retrning a meal jsx element
    //const mealsList = DUMMY_MEALS.map((meal) => <li> {meal.name} </li>);
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};
export default AvailableMeals;