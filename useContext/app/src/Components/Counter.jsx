import React, { useContext } from 'react'
import { CounterContext } from '../Context/Counter'

const Counter = () => {
  const counter = useContext(CounterContext);

  return (
    <div>
      <button onClick={() => counter.setCount(counter.count + 1)}>Increment</button>
      <button onClick={() => counter.setCount(counter.count - 1)}>Decrement</button>
    </div>
  )
}

export default Counter;