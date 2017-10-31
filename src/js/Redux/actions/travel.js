import * as types from '../actions/action-types';
import store from '../store'

export function setTravelArray(travelArray) {
    store.dispatch({type: types.SET_TRAVEL_CONTENT, travelArray});
}

