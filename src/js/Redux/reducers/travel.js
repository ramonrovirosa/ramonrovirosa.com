import * as types from '../actions/action-types';


const initialState = {
    array:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_TRAVEL_CONTENT: {
            return {
                ...state,
                array: action.travelArray
            };
        }

        default:
            return state;

    }
};