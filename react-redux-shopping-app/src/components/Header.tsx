import React, { Component } from 'react';

export class Header extends Component {
    render() {
        return (
            <div className='alert alert-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-10'>
                            <h3>Shopping App</h3>
                        </div>
                        <div className='col text-end'>
                            <h3>
                                <i className='bi bi-cart'></i>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
