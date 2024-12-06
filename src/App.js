// import "./styles.css";
// import { useState } from "react";
// export default function App() {
//   const [count,setCount] = useState(0);
//   //// a increment function to increase the count when the button is clicked
//   function Increament() {
//     setCount(count+1);
//   }
//   function Decreament() {
//     setCount(count-1);
//     }
//   return (
//     <div className="App">
//       <h1>Counter App</h1>
//       <p>Count : {count}</p>
//       <button onClick={Increament}>increment</button>
//       <button onClick={Decreament}>decrement</button>
//     </div>
//   );
// }
/// same implementation but using the class Component 
import React, { Component } from "react";
import "./styles.css";
/// props are passed to the comp constructor using super keyword 
class CounterApp extends Component {
  constructor(props) {
    super(props);///
    this.state = {
      count: 0,
    };
  }/// this is same as useState(0);

  // Method to increment count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        {/*pass the above func as a ref to the event handler  */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;
