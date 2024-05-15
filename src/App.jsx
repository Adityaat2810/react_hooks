import { useState ,useMemo } from "react";

/**
 *problem with previous approach when we click on counter
 *rerender happen it again need to run an epensive 
 * for loop to compute 
 * 
 * Solution =>  memoizataion 
 * useMemo
 * */

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);


  // this will run only when inputValue changes 
  //very close to useEffect
  let count =useMemo(()=>{
    let finalCount = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCount = finalCount + i;
    }

    return finalCount;
  },[inputValue])
 

  return <div>
    <input onChange={function(e) {
      setInputValue(e.target.value);
    }} placeholder={"Find sum from 1 to n"}></input>
    <br />
    Sum from 1 to {inputValue} is {count}
    <br />
    <button onClick={() => {
      setCounter(counter + 1);
    }}>Counter ({counter})</button>
  </div>
}

export default App;