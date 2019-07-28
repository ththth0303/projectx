import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import { CALL_SEARCH, CALL_SEARCH_SUCCESS } from "./type";

export function* watcherSearchSaga() {

    yield takeLatest(CALL_SEARCH, search);
}

function searchData(data) {
    return axios.get('/api/v1/search/app', { params : data});
}

function* search(dispath) {
    try {
        yield put({ type: 'CALL_LOADING', data: true });
        yield put({ type: CALL_SEARCH_SUCCESS, data: [] });
        const response = yield call(searchData, dispath.data);
        yield put({ type: CALL_SEARCH_SUCCESS, data: response.data });
    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
    yield put({ type: 'CALL_LOADING', data: false });
}
