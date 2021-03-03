import React,{Component} from 'react';
import {connect} from 'react-redux';
import { decreaseAction, increaseAction } from '../actions/counterAction';

class Counter extends Component {

    render() {
        let {value,increment,decrement} =  this.props;
        return (
            <div>
                <h5>{value}</h5>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        );  
    }
}

// React redux integrate
const mapStateToProps = (state) => {
    return {
        value:state.cr.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment:() => dispatch(increaseAction),
        decrement:() => dispatch(decreaseAction)
    }
}

const MyCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default MyCounter;