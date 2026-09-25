import React from 'react';
import Counter from './Components/Count';
import {useDispatch} from 'react-redux'
const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={e=>dispatch({type:'INCREMENT'})} >Increment</button>
      <Counter></Counter>
      <button onClick={e=>dispatch({type:'DECREMENT'})} >Decrement</button>
    </div>
  )
}

export default App;
