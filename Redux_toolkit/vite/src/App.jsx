import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount,decrementByAmount } from './redux/features/couterSlice.js'

const App = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div> 
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      <button onClick={() => dispatch(incrementByAmount(20))}>+20</button>
      <button onClick={() => dispatch(decrementByAmount(10))}>-10</button>
      <button onClick={() => dispatch(decrementByAmount(20))}>-20</button>
    </div>
  )
}
export default App;