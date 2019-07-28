import { Map } from "immutable";

import { CALL_SEARCH_SUCCESS } from "./type";

// reducer with initial state
const immutableInit = Map({
    dataSource: {},
    loading: false,
});

export function reducerSearch(state = immutableInit, action) {
    switch (action.type) {
        case CALL_SEARCH_SUCCESS:
            return state.set('dataSource', action.data);
        case 'CALL_LOADING':
            return state.set('loading', action.data);
        default:
            return state;
    }
}