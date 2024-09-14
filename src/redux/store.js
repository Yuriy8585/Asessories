import {createStore, combineReducers} from 'redux';
import gistReducer from "./GistReducer";
import registrationReducer from "./RegistrationReducer";

// Combine your reducers here
const rootReducer = combineReducers({
    gistReducer: gistReducer,
    registration: registrationReducer
});

const store = createStore(rootReducer);

export default store;