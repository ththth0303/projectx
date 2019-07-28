import { all } from "redux-saga/effects";
import { watcherSearchSaga } from "./modules/search/saga";
// import { watcherHeroSaga } from "./modules/heroes/saga";
// import { watcherHomeSaga } from "./modules/home/saga";
// import { watcherGuidSaga } from "./modules/guides/saga";


export function* rootSaga() {
    yield all([
        watcherSearchSaga(),
        // watcherHeroSaga(),
        // watcherHomeSaga(),
        // watcherGuidSaga(),
    ]);
}
