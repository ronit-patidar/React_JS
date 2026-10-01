import React from 'react'
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,Reset,incrementByAmount} from './features/counters/counterSlice'

const App = () => {
  const [amount,setAmount] = useState(0);

  // 1. Get the dispatch function to send actions to the store
  const dispatch = useDispatch()

  // 2. Read the current count from the Redux store
  // (This assumes your store is configured with a 'counter' reducer)
  const count = useSelector((state) => state.counter.value)

  function handleIncrementClick() {
    dispatch(increment())
  }
  
  function handleDecrementClick() {
    dispatch(decrement())
  }
  function handleReset() {
    dispatch(Reset())
  }
  function handleInc() {
    dispatch(incrementByAmount(amount))
  }
  
  return (
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count = {count}</p><br />
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type='Number' value={amount}
      onChange={(e)=>{
        setAmount(e.target.value)
      }}
      />
      <button onClick={handleInc}>Inc Amount</button>
    </div>
  )
}

export default App