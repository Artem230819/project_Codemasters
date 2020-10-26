import {combineReducers, createStore} from "redux";
import {reducer as formReducer} from 'redux-form';
import AddLogin from "./authReducer";

let reducer = combineReducers({
    login: AddLogin,
    form: formReducer
});

let store = createStore(reducer);

export default store;