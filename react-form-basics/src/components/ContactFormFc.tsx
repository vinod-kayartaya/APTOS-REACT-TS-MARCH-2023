import React, { useState, useEffect } from 'react';

const ContactFormFc = () => {
    const [user, setUser] = useState({ fullname: '', email: '', phone: '' });

    // this hook is called when any state is mutated
    useEffect(() => {
        console.log('ContactFormFc useEffect without deps called');
    });

    // this hook is called only once after the component is rendered;
    // equivalent of componentDidMount lifecycle method of a class component
    useEffect(() => {
        console.log(
            'ContactFormFc useEffect with an empty array as deps called'
        );

        // this is equivalent of componentWillUnmount
        return () => {
            console.log(
                'ContactFormFc useEffect(componentWillUnmount) with an empty array as deps called'
            );
        };
    }, []);

    // this hook is called everytime the specified deps are mutated
    useEffect(() => {
        console.log('ContactFormFc useEffect with email as deps called');
    }, [user.email]);

    const changeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        // setUser({ ...user, [name]: value });
        setUser((oldState) => ({ ...oldState, [name]: value }));
    };

    const submitHandler = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        alert(`Value of this.state is ${JSON.stringify(user)}`);
    };

    console.log('ContactFormFc is rendered');
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label htmlFor='fullname' className='form-label'>
                        Fullname
                    </label>
                    <input
                        className='form-control'
                        id='fullname'
                        name='fullname'
                        value={user.fullname}
                        onChange={changeHandler}
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
                        value={user.email}
                        onChange={changeHandler}
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
                        value={user.phone}
                        onChange={changeHandler}
                    />
                </div>

                <button className='btn btn-primary'>Submit</button>
            </form>

            <p>{JSON.stringify(user)}</p>
        </>
    );
};

export default ContactFormFc;
