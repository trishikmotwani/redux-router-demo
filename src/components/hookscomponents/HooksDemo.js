import * as React from 'react';
import {UseContextDemo} from './UseContextDemo';
import {CounterDemo} from './UseReducerForCounterDemo';

export const HooksDemo = (props) => {

    return(

        <div>

            <h1> HooksDemo</h1>

            <UseContextDemo></UseContextDemo>
            <CounterDemo></CounterDemo>
        </div>
    );
    
    
}