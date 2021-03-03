import {createStore} from 'redux';
import { counterReducer } from './reducers/counterReducer';
import { rootReducer } from './reducers/rootReducer';

export const store = createStore(rootReducer);