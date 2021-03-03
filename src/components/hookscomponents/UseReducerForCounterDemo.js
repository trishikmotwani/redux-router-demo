import * as React from 'react';


const counterReducer = (state,action) => {

    switch(action.type) {
        case 'increment':
            return {count: state.count++};
        case 'decrement':
            return {count: state.count--};
        default: throw new Error();
    }
} 

export const CounterDemo = () => {

    const [state, dispatch] = React.useReducer(counterReducer, {count: 0});
    return (
        <div>
            <h4> Counter useRecucerDemo for redux</h4>
            Count : {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}> - </button>
            <button onClick={() => dispatch({type: 'increment'})}> + </button>
        </div>
    );
}


