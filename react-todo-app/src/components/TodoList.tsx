import React, { Component } from 'react';
import { Task } from '../App';
import TodoEntry from './TodoEntry';

type TodoListProps = {
    tasks: Task[];
    toggleTodoStatus: (id: number) => void;
    deleteTask: (id: number) => void;
    deleteAll: () => void;
    deleteCompletedTasks: () => void;
};

export class TodoList extends Component<TodoListProps> {
    render() {
        const {
            tasks,
            toggleTodoStatus,
            deleteAll,
            deleteCompletedTasks,
            deleteTask,
        } = this.props;

        const tasksJsx = tasks.map((t) => (
            <li className='list-group-item' key={t.id}>
                <TodoEntry
                    task={t}
                    toggleTodoStatus={toggleTodoStatus}
                    deleteTask={deleteTask}
                />
            </li>
        ));

        return (
            <>
                <ul className='list-group'>{tasksJsx}</ul>

                {tasks.length > 0 && (
                    <div>
                        <button
                            onClick={deleteAll}
                            className='btn btn-outline-danger'
                        >
                            Delete all tasks
                        </button>
                        <button
                            onClick={deleteCompletedTasks}
                            className='btn btn-outline-danger'
                        >
                            Delete all completed tasks
                        </button>
                    </div>
                )}
            </>
        );
    }
}

export default TodoList;
