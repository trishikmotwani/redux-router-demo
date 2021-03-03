import * as React from 'react';
import { useContext } from 'react';
import {LoginContext} from '../../App';


(async function function1() {
    var test = 1;
    var userResponse;
    var response;
    
    response = await fetch('https://api.github.com/users/hacktivist123/repos');

    userResponse = await response.body.json();

    this.setState({
        user: userResponse
    });

})();
export const UseContextDemo = (props) => {

    const loginContext =  React.useContext(LoginContext);
    const [state, setState] = React.useState({
        user: undefined,
    });
    return(

        <div>

            <h4>Inside UseContextHooksDemo</h4>
            <p>{loginContext.username}</p>
            {state.user &&
                <div>{state.user} </div>

            }
            <button onClick={() => function1()}> Call Async Function </button>
        </div>
    );
}