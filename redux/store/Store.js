import {createStore} from 'redux';
import reducers from '../reducers/Reducers';

export const myStore = createStore(reducers);
