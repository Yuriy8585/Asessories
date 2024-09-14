import {createStore, combineReducers} from 'redux';
import gistReducer from "./GistReducer";

// Combine your reducers here
const rootReducer = combineReducers({
    gistReducer: gistReducer
});

const store = createStore(rootReducer);

export default store;