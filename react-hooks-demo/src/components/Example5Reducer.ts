
export interface IState {
    count: number;
}

export interface IAction {
    type: string;
    payload?: any;
}

const countReducer = (state: IState, action: IAction): IState => {
    if (action.type === 'INCREMENT') {
        return { ...state, count: state.count + 1 };
    }

    if (action.type === 'DECREMENT') {
        return { ...state, count: state.count - 1 };
    }

    return { ...state };
};

export default countReducer;