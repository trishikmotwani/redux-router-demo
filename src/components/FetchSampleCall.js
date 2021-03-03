import React,{Component} from 'react';
import {connect} from 'react-redux';
import { decreaseAction, increaseAction } from '../actions/counterAction';

class FetchSampleCall extends Component {

    

    componentDidMount() {
        const user = `https://api.github.com/users/hacktivist123/repos`;
        
        const [appState, setAppState] = React.useState({
            loading: false,
            response: null,
        });

        // Promise<Response> userPromise = fetch(user);

        fetch(user)
            .then((res) => res.json())
            .then((response) => {
                console.log('user response' , response)
                setAppState({ loading: false, response: response });
            });
    }

    
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
