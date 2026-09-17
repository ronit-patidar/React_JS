component life cycle
Initialization
mounting
updation
unmouting


useEffect(() => { // callback executed when mouting
  // setup / side effect

  return () => { // when demounting
    // optional cleanup
  };
}, [dependencies]);



The dependency array controls when the effect runs:

Code	When it runs
useEffect(() => {...})	After every render
useEffect(() => {...}, [])	After the component mounts
useEffect(() => {...}, [value])	After mount and whenever value changes