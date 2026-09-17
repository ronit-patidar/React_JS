import {useState,useEffect} from 'react';
import react from 'react';
function App(){
  const[count,setCount] = useState(0);
   useEffect(() => {
    console.log(`Mouting at ${count}`);
    // return () => {
    //   console.log(`Unmouting at ${count}`)
    // }
  }, [count]);
  return (
    <div>
      <h1>Value of count is {count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  );
}
export default App;
