import { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export type Task = {
    id: number;
    text: string;
    completed: boolean;
    timestamp: Date;
};

function App() {
    const [tasks, setTasks] = useState<Array<Task>>([
        {
            id: 1,
            text: 'Clean the car',
            completed: true,
            timestamp: new Date(),
        },
        {
            id: 2,
            text: 'Buy vegetables',
            completed: false,
            timestamp: new Date(),
        },
        {
            id: 3,
            text: 'Create new react app',
            completed: true,
            timestamp: new Date(),
        },
    ]);

    // since this is an arrow function, it is tightly bound with the component.
    // a child component gets a reference to this function, and when called from the child component,
    // the state in this component is mutated!
    const addTask = (text: string) => {
        const id =
            tasks.length === 0 ? 1 : 1 + Math.max(...tasks.map((t) => t.id));
        const newTask: Task = {
            id,
            text,
            completed: false,
            timestamp: new Date(),
        };

        setTasks((oldTasks) => [...oldTasks, newTask]);
        // setTasks([...tasks, newTask]);
    };

    const toggleTodoStatus = (id: number) => {
        const task = tasks.find((t) => t.id === id);
        if (!task) return;

        task.completed = !task.completed;
        setTasks([...tasks]);
    };

    return (
        <>
            <Header tasks={tasks} />
            {/* .container>.row>.col-5+.col-7 */}
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <TodoForm addTask={addTask} />
                    </div>
                    <div className='col-7'>
                        <TodoList
                            tasks={tasks}
                            toggleTodoStatus={toggleTodoStatus}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
