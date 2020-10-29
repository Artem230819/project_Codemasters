import {authUser} from "../Api/Api";
import {responsePathAsArray} from "graphql";

let initialState = {
    username: null,
    login: null
}

export default function AddLogin(state = initialState, action) {
    switch (action.type) {
        case "ADD_LOGIN": {
            return [...state, action.payload];
        }
        default:
            return state;
    }
}
export const Login = (username, password) =>(dispatch)=>{
    return authUser.login(username, password).then(response => {return response.data})
}
export const setUser = (username, login) =>({
    type: "ADD_LOGIN",
    payload: {username, login}
})