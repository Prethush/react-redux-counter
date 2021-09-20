import { connect } from "react-redux";

function App(props) {

  function handleClick({ target }) {
    let { id } = target.dataset;
    if (id === "increment") {
      props.dispatch({ type: "increment" });
    }
    if (id === "decrement") {
      props.dispatch({ type: "decrement" });
    }
    if (id === "reset") {
      props.dispatch({ type: "reset" });
    }
    if (id === "five") {
      props.dispatch({ type: "changeStep", payload: 5 });
    }
    if (id === "ten") {
      props.dispatch({ type: "changeStep", payload: 10 });
    }
    if (id === "fifteen") {
      props.dispatch({ type: "changeStep", payload: 15 });
    }
    if (id === "max-fifteen") {
      props.dispatch({ type: "changeMax", payload: 15 });
    }
    if (id === "max-hundred") {
      props.dispatch({ type: "changeMax", payload: 100 });
    }
    if (id === "max-twohundred") {
      props.dispatch({ type: "changeMax", payload: 200 });
    }
  }

  return <div className="p-12">
    <h1 className="text-center text-6xl font-bold">Counter App</h1>
    <h2 className="text-center text-4xl font-bold my-6">{props.counter}</h2>
    <div className="flex items-center justify-center">
      <div className="mx-8">
        <button className={props.step === 5 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} data-id="five" onClick={handleClick}>5</button>
        <button className={props.step === 10 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} data-id="ten" onClick={handleClick}>10</button>
        <button className={props.step === 15 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} data-id="fifteen" onClick={handleClick}>15</button>
      </div>
      <div>
        <button className={props.max === 15 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} onClick={handleClick} data-id="max-fifteen">15</button>
        <button className={props.max === 100 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} onClick={handleClick} data-id="max-hundred">100</button>
        <button className={props.max === 200 ? "bg-red-500 font-bold py-2 px-4 text-white rounded-md mx-2" : "bg-blue-500 font-bold py-2 px-4 text-white rounded-md mx-2"} onClick={handleClick} data-id="max-twohundred">200</button>
      </div>
    </div>
    <div className="flex justify-center mt-8 my-6">
      <button onClick={handleClick} className="bg-green-500 font-bold p-2 text-white rounded-md mx-2" data-id="increment">Increment</button>
      <button onClick={handleClick} className="bg-green-500 font-bold p-2 text-white rounded-md mx-2" data-id="decrement">Decrement</button>
      <button onClick={handleClick} className="bg-green-500 font-bold p-2 text-white rounded-md mx-2" data-id="reset">Reset</button>
    </div>
  </div>
}

function getCounter(state) {
  return {
    counter: state.value,
    step: state.step,
    max: state.max
  }
}
export default connect(getCounter)(App);