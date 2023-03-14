import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export class Layout extends Component {
    render() {
        return (
            <>
                <Header />

                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <Sidebar />
                        </div>
                        <div className='col-9'>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
