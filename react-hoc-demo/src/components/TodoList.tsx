import { Component } from 'react';
import withUrl from '../hoc/withUrl';

type Task = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};
type TodoListProps = {
    tasks?: Task[];
};
class TodoList extends Component<TodoListProps> {
    render() {
        const { tasks } = this.props;
        return (
            <>
                <h3>Todo list</h3>
                <ul className='list-group'>
                    {tasks &&
                        tasks.map((t) => (
                            <li className='list-group-item' key={t.id}>
                                <span
                                    className={`lead ${
                                        t.completed
                                            ? 'text-success'
                                            : 'text-danger'
                                    }`}
                                >
                                    {t.title}
                                </span>
                            </li>
                        ))}
                </ul>
            </>
        );
    }
}
export default withUrl({
    url: 'https://jsonplaceholder.typicode.com/todos',
    prop: 'tasks',
})(TodoList);
