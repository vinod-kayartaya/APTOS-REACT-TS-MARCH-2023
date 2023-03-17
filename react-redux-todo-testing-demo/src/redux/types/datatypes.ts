export interface IAction {
    type: string;
    payload?: any;
}

export interface IState {
    todos: ITodo[];
}

export interface ITodo {
    id: number;
    todoText: string;
    finished: boolean;
}