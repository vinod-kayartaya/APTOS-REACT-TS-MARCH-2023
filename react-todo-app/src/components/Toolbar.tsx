import React, { Component } from 'react';
import { Task } from '../App';

type ToolbarProps = {
    task: Task;
    deleteTask: (id: number) => void;
};

export class Toolbar extends Component<ToolbarProps> {
    render() {
        const { task, deleteTask } = this.props;

        return (
            <>
                <span className='toolbar'>
                    <button className='btn btn-link bi bi-pencil'></button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className='btn btn-link bi bi-trash'
                    ></button>
                    <button className='btn btn-link bi bi-arrow-up-circle'></button>
                    <button className='btn btn-link bi bi-arrow-down-circle'></button>
                </span>
            </>
        );
    }
}

export default Toolbar;
