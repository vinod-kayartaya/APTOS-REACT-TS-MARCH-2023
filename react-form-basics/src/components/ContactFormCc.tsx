import React, { Component } from 'react';

type ContactFormCcPropsType = {};

type ContactFormCcStateType = {
    fullname?: string;
    email?: string;
    phone?: string;
};

export class ContactFormCc extends Component<
    ContactFormCcPropsType,
    ContactFormCcStateType
> {
    constructor(props: ContactFormCcPropsType) {
        super(props);
        console.log('ContactFormCc constructor called at', new Date());
        this.changeHandler = this.changeHandler.bind(this);
    }

    state = {
        fullname: '',
        email: '',
        phone: '',
    };

    changeHandler(evt: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = evt.target;
        this.setState({ [name]: value }); // mutates the state and re-renders the comp
    }

    submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        alert(`Value of this.state is ${JSON.stringify(this.state)}`);
    };

    componentDidMount() {
        console.log('ContactFormCc.componentDidMount() called at', new Date());
    }

    componentWillUnmount() {
        console.log(
            'ContactFormCc.componentWillUnmount() called at',
            new Date()
        );
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        // never call this.setState()
        console.log('ContactFormCc.render() called at', new Date());
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div className='mb-3'>
                        <label htmlFor='fullname' className='form-label'>
                            Fullname
                        </label>
                        <input
                            className='form-control'
                            id='fullname'
                            name='fullname'
                            value={this.state.fullname}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'>
                            Email address
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={this.state.email}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'>
                            Phone number
                        </label>
                        <input
                            type='tel'
                            className='form-control'
                            id='phone'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.changeHandler}
                        />
                    </div>

                    <button className='btn btn-primary'>Submit</button>
                </form>

                <p>{JSON.stringify(this.state)}</p>
            </>
        );
    }
}

export default ContactFormCc;
