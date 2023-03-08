import React, { Component } from 'react';

export class Toolbar extends Component {
    render() {
        return (
            <>
                <span>
                    <button className='btn btn-link bi bi-pencil'></button>
                    <button className='btn btn-link bi bi-trash'></button>
                    <button className='btn btn-link bi bi-arrow-up-circle'></button>
                    <button className='btn btn-link bi bi-arrow-down-circle'></button>
                </span>
            </>
        );
    }
}

export default Toolbar;
