import { LOGIN, LOGIN_ERROR, LOGOUT } from "../actions/actionTypes";
import { IAction } from "../datatypes";
interface IState {
    token: string | undefined;
    loginError: string | undefined;
    loggedInUser: any;
    isAuthenticated: boolean;
}

const initialState: IState = {
    token: undefined,
    loginError: undefined,
    loggedInUser: undefined,
    isAuthenticated: false
};
const authReducer = (state: IState = initialState, action: IAction) => {
    console.log('authReducer called with action', action);
    if (action.type === LOGIN) {
        const { id, name, token } = action.payload;
        return { ...state, isAuthenticated: true, token, loginError: undefined, loggedInUser: { id, name } };
    }

    if (action.type === LOGIN_ERROR) {
        return { ...state, isAuthenticated: false, token: undefined, loginError: action.payload, loggedInUser: undefined };
    }

    if (action.type === LOGOUT) {
        return { ...state, isAuthenticated: false, token: undefined, loginError: undefined, loggedInUser: undefined };
    }

    return { ...state };
};

export default authReducer;