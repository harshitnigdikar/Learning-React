import React, {useState} from "react";
import "./App.css";

const App = () => {
  const [count , setCount] = useState(0);

  return (
    <div className = "App">
      <header>
        <h1> Counter app using State / hooks</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick = {() => setCount(0)}>Reset</button>
      <button onClick = {() => count > 9 ? "" : setCount(count + 1)}>Increase Counter</button>
      <button onClick = {() => count < 1 ? "" : setCount(count - 1)}>Decrease Counter</button>
    </div>
  )
}

export default App;