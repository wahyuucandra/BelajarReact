import { useEffect, useReducer, useRef, useState } from "react";
import "./ReduceState.css"

const initialState = {
  counter : 0
}

const actions = {
  INCREMENT: "increment"
}

const counterReducer = (state, action) => {
  switch (action.type) {
    case actions.INCREMENT:
        return { ...state, counter: action.counter + 1}
    default:
        return state;
  }
}

const ReduceState = () => {
  // const [state, dispatch] = useReducer(counterReducer, initialState)
  // const {counter} = state

  const [counter, setCounter] = useState(0);

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current)
  }, [inputRef.current]);  

  const updateRef = () => {
    inputRef.current = "string"
  }

  const debounceRef = useRef(null);

  const onChange = (e) => {
    if(debounceRef.current) clearTimeout()
    debounceRef.current= setTimeout(() => {
      console.log(e.target.value)
    }, 800);
  }

  return (
    <div className="main__container"> 
        <h1>Reducer State</h1>
        <p>{counter}</p>
        <div className="container_button">
          <button className="btn_primary" onClick={updateRef}>Add Counter</button>
          <button className="btn_primary" onClick={console.log(inputRef.current)}>Show Ref</button>
        </div>
        <input onChange={onChange} />
      </div>
  )
}

export default ReduceState;