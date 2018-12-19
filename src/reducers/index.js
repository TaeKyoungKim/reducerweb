import {combineReducers} from 'reduc';
import counter from './counter'
import ui from '.ui';

const reducers = combineReducers ({
    counter , ui
})

export default reducers;