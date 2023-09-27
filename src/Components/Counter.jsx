import { useState } from "react";

const Counter = () => {

    const [state, SetCounter] = useState(() => {
        return {counter: 10, title: "Fun"};
    });

    function incrementCounter() {
        //SetCounter(counter+1);
        //SetCounter(counter+1); // not called - use prevState
        SetCounter((prevState) => {
            return {...prevState, counter: prevState.counter + 1}
        });
    }

    function decrementCounter() {
        SetCounter((prevState) => {
            return {...prevState, counter: prevState.counter - 1}
        });
    }

    return (
        <div className="col-12 col-md-2 offset-md-4 border p-2 text-center">
            <span className="h2 pt-4 m-2" >{state.title} Counter</span>
            <br/>
            <button className="btn btn-success m-2" 
                onClick={incrementCounter}>+1
            </button>
            <button className="btn btn-danger m-1"
                onClick={decrementCounter}>-1
            </button>
            <br/>
            <span className="h4 m-2">
                Counter:
                <span className="text-success m-2">{state.counter}</span>
            </span>
        </div>
    )
};

export default Counter;