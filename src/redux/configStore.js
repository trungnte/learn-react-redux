import {combineReducers, createStore} from "redux";
import { gameTaiXiuReducer } from "./reducers/gameTaiXiuReducer";

const rootReducer = combineReducers({
    // cac state can luu tru tren store
    // Default parameter
    // gameTaiXiuReducer: gameTaiXiuReducer
    gameTaiXiuReducer, //! cach viet rut gon
});

export const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);