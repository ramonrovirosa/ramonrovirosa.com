import * as types from '../actions/action-types';
import store from '../store'

export function setContactEmail(email) {
    store.dispatch({type: types.SET_CONTACT_EMAIL, email});
}

