import React, { ChangeEvent, Component, FormEvent } from 'react';
import { RootStoreType } from '../redux/store';
import { login } from '../redux/actions/authActionCreators';
import { connect } from 'react-redux';

interface LoginFormProps {
    loginError: string | undefined;
    isAuthenticated: boolean;
    login: (email: string, password: string) => void;
}
interface LoginFormState {
    email: string;
    emailError: string;
    password: string;
    passwordError: string;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
    state = {
        email: '',
        emailError: '',
        password: '',
        passwordError: '',
    };

    changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;
        this.setState({
            [name]: value,
            [`${name}Error`]: '',
        } as Pick<LoginFormState, keyof LoginFormState>);
    };

    submitHandler = (evt: FormEvent) => {
        evt.preventDefault();
        const { email, password } = this.state;
        let emailError = '';
        let passwordError = '';

        if (!email) {
            emailError = 'Email is required but missing';
        }
        if (!password) {
            passwordError = 'Password is required but missing';
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
        } else {
            this.props.login(email, password);
        }
    };

    render() {
        const { email, emailError, password, passwordError } = this.state;

        return (
            <>
                <h5 className='mb-3 mt-3'>Login to access your dashboard</h5>

                <div className='row'>
                    <div className='col-6'>
                        <form onSubmit={this.submitHandler}>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>
                                    Email address
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    id='email'
                                    autoFocus
                                    name='email'
                                    value={email}
                                    onChange={this.changeHandler}
                                />
                                {emailError && (
                                    <div className='text-danger'>
                                        {emailError}
                                    </div>
                                )}
                            </div>
                            <div className='mb-3'>
                                <label
                                    htmlFor='password'
                                    className='form-label'
                                >
                                    Password
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    id='password'
                                    name='password'
                                    value={password}
                                    onChange={this.changeHandler}
                                />
                                {passwordError && (
                                    <div className='text-danger'>
                                        {passwordError}
                                    </div>
                                )}
                            </div>
                            <button type='submit' className='btn btn-primary'>
                                Login
                            </button>

                            {this.props.loginError && (
                                <div className='mt-3 text-danger'>
                                    {this.props.loginError}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

const mapState = (store: RootStoreType) => ({
    isAuthenticated: store.authReducerState.isAuthenticated,
    loginError: store.authReducerState.loginError,
});

const mapDispatch = {
    login,
};
export default connect(mapState, mapDispatch)(LoginForm);
