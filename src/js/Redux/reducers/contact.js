import * as types from '../actions/action-types';


const initialState = {
    email: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_CONTACT_EMAIL: {
            return {
                ...state,
                email: action.email
            };
        }

        default:
            return state;

    }
};