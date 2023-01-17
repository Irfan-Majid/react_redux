import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from './../Services/actions/counterAction';

export const Counter = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    };

    const handleDecrement = () => {
        dispatch(decrementCounter());
    };

    const resetCount = () => {
        dispatch(resetCounter());
    };


  return (
    <div>
        <h2>Counter App</h2>

        <h3>Count :{count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}
