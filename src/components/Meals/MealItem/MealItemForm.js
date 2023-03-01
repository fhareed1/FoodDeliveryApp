import React, { useRef, useState } from 'react';

import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);

  // the constant for the useRef
  const amountInputRef = useRef();

  // function for submitting the form
  const submitHandler = (event) => {
    event.preventDefault();

    // we did this to get the amount in the input which would return a string
    const enteredAmount = amountInputRef.current.value;
    // we did this to convert the string to a value
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler} >
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button type='submit' >+Add</button>
      {!isAmountValid && <p>Please Enter a Valid Amount between 1 and 5</p>}
    </form>
  );
};

export default MealItemForm;
