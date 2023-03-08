import { Component } from 'react';
import { Task } from '../App';

type HeaderProps = {
    tasks: Task[];
};

export class Header extends Component<HeaderProps> {
    render() {
        const { tasks } = this.props;
        const completedCount = tasks.filter((t) => t.completed === true).length;
        const taskCount = tasks.length;

        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>Task manager app</h1>
                    </div>
                </div>
                <div className='container'>
                    {taskCount > 0 && (
                        <p>
                            Tasks {completedCount}/{taskCount} completed!
                        </p>
                    )}
                </div>
            </>
        );
    }
}

export default Header;
