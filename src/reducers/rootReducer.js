import {counterReducer} from './counterReducer';
import {taskReducer} from './taskReducer';
import {combineReducers} from 'redux';

export const rootReducer = combineReducers({
    tr:taskReducer ,
    cr:counterReducer
})