import { useRef } from 'react';

export default function App() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    // alert('You clicked ' + ref.current + ' times!');
    console.log(`Value of ref is ${ref.current}`);
  }

  return (
    <div>
    <h1>Value of ref is {ref.current}</h1>
    <button onClick={handleClick}>
      Click me!
    </button>
    </div>
  );
}
