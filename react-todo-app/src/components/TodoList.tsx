import React, { Component } from 'react';
import { Task } from '../App';
import TodoEntry from './TodoEntry';

type TodoListProps = {
    tasks: Task[];
    toggleTodoStatus: (id: number) => void;
};

export class TodoList extends Component<TodoListProps> {
    render() {
        const { tasks, toggleTodoStatus } = this.props;

        const tasksJsx = tasks.map((t) => (
            <li className='list-group-item' key={t.id}>
                <TodoEntry task={t} toggleTodoStatus={toggleTodoStatus} />
            </li>
        ));

        return (
            <>
                <ul className='list-group'>{tasksJsx}</ul>
            </>
        );
    }
}

export default TodoList;
