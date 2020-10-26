export default function AddLogin(state = [], action) {
    switch (action.type) {
        case "ADD_LOGIN": {
            return [...state, action.data];
        }
        default:
            return state;
    }
}
