import React, { Component } from 'react';
import { Task } from '../App';

type ToolbarProps = {
    task: Task;
    deleteTask: (id: number) => void;
    setIsEditable: (isEditable: boolean) => void;
    cancelEdit: () => void;
    isEditable: boolean;
    moveUp: (id: number) => void;
    moveDown: (id: number) => void;
};

export class Toolbar extends Component<ToolbarProps> {
    render() {
        const {
            task,
            deleteTask,
            setIsEditable,
            isEditable,
            cancelEdit,
            moveDown,
            moveUp,
        } = this.props;

        return (
            <>
                <span className='toolbar'>
                    {!isEditable ? (
                        <button
                            onClick={() => setIsEditable(true)}
                            className='btn btn-link bi bi-pencil'
                        ></button>
                    ) : (
                        <button
                            onClick={() => cancelEdit()}
                            className='btn btn-link bi bi-x-circle'
                        ></button>
                    )}

                    <button
                        onClick={() => deleteTask(task.id)}
                        className='btn btn-link bi bi-trash'
                    ></button>
                    <button
                        onClick={() => moveUp(task.id)}
                        className='btn btn-link bi bi-arrow-up-circle'
                    ></button>
                    <button
                        onClick={() => moveDown(task.id)}
                        className='btn btn-link bi bi-arrow-down-circle'
                    ></button>
                </span>
            </>
        );
    }
}

export default Toolbar;
