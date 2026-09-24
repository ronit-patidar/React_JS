useRef
useRef is a React Hook that lets you reference a value that’s not needed for rendering.

const ref = useRef(initialValue)

useRef(initialValue) 
Call useRef at the top level of your component to declare a ref.

useRef returns an object with a single property:

current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
On the next renders, useRef will return the same object.

useRef returns a ref object with a single current property initially set to the initial value you provided.