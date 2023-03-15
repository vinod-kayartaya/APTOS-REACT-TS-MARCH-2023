import { LOGIN, LOGIN_ERROR, LOGOUT } from "../actions/actionTypes";

interface IState {
    token: string | undefined;
    loginError: string | undefined;
    loggedInUser: any;
    isAuthenticated: boolean;
}
interface IAction {
    type: string;
    payload?: any;
}
const initialState: IState = {
    token: undefined,
    loginError: undefined,
    loggedInUser: undefined,
    isAuthenticated: false
};
const authReducer = (state: IState = initialState, action: IAction) => {
    if (action.type === LOGIN) {
        const { id, name, token } = action.payload;
        return { ...state, isAutheticated: true, token, loginError: undefined, loggedInUser: { id, name } };
    }

    if (action.type === LOGIN_ERROR) {
        return { ...state, isAutheticated: false, token: undefined, loginError: action.payload, loggedInUser: undefined };
    }

    if (action.type === LOGOUT) {
        return { ...state, isAutheticated: false, token: undefined, loginError: undefined, loggedInUser: undefined };
    }

    return { ...state };
};

export default authReducer;