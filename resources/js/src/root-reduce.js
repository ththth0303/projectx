import { combineReducers } from "redux";

import { reducerSearch } from "./modules/search/redux";
// import { reducerHero } from "./modules/heroes/redux"
// import { reducerHome } from "./modules/home/redux"
// import { reducerGuid } from "./modules/guides/redux"

export const rootReducer = combineReducers({
    search: reducerSearch,
    // hero: reducerHero,
    // home: reducerHome,
    // guid: reducerGuid,
});
