import React from 'react';

import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

import classes from './AvailableMeals.module.css';
import useHttps from '../../hooks/use-httpsOrder';

const AvailableMeals = () => {
  const {
    meals: mealAvailable,
    error: httpError,
    loading
  } = useHttps();

  if (loading) {
    return (
      <section>
        <p className={classes.errormsg}>loading..</p>
      </section>
    );
  }


  if (httpError) {
    return (
      <section>
        <p className={classes.errormsg}>{httpError}</p>
      </section>
    );
  }

  // we mapped it to THe meal item component
  const mealsList = mealAvailable.map((meal) => (
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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
