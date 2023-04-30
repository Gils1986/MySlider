import "./App.css";
import { firstArray } from "./array";
import { MySlider } from "./components/mySlider";

function App() {
  return (
    <div className="App">
      <MySlider images={firstArray} firstImage={2} infiniteSlide={true} />
    </div>
  );
}

export default App;

// let {age , name: a, notSureExists: nse = "some default value"} = obj
// let age = obj.age
// let a = obj.name
// let nse = obj.notSureExists === undefined ? "some default value" : obj.notSureExists

// import "./App.css";
// //import { RandomNumber } from "./components/randomNumber";
// import { Counter } from "./components/counter";

// function App() {
//   return (
//     <div className="main" style={{ padding: "20px" }}>
//       <Counter min={0} max={10} start={5} step={2} />
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// //import { RandomNumber } from "./components/randomNumber";
// import { Counter } from "./components/counter";

// function App() {
//   return (
//     <div className="main" style={{ padding: "20px" }}>
//       <Counter min={0} max={10} start={5} step={2} />
//     </div>
//   );
// }

// export default App;
// import { useState } from "react";

// export function Counter({
//   min = Number.MIN_SAFE_INTEGER,
//   max = Number.MAX_SAFE_INTEGER,
//   start = 0,
//   step = 1,
// }) {
//   const [counter, setCounter] = useState(start);

//   const add = () => {
//     if (counter + step < max) {
//       setCounter((counter) => counter + step);
//     }
//   };

//   const sub = () => {
//     if (counter - step > min) {
//       setCounter((counter) => counter - step);
//     }
//   };

//   return (
//     <div>
//       <p>{counter}</p>
//       <button disabled={counter + step >= max} onClick={add}>
//         +
//       </button>
//       <button disabled={counter - step <= min} onClick={sub}>
//         -
//       </button>
//     </div>
//   );
// }
