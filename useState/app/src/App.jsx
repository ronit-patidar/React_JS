import react,{ useState } from 'react'
function App() {
  const[count,setCount]=useState(0);
  return (
    <>
    <h1>Hello,World</h1>
    <h3>Value of count = {count}</h3>
    <h6>{count%2 === 0 ? "EVEN" : "ODD"}</h6>
    <button onClick={()=>setCount(count+1)} >Increase</button>
    <button onClick={()=>setCount(count-1)} >Decrease</button>
    </>
  )
}

export default App
