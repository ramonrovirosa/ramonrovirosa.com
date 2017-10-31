import { combineReducers } from 'redux';

// Reducers
import contactReducer from './contact';
import travelReducer from './travel';

// Combine Reducers
var reducers = combineReducers({
    contact: contactReducer,
    travel: travelReducer
});

export default reducers;