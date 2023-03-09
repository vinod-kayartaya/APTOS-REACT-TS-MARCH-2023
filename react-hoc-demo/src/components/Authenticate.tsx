import LoginForm from './LoginForm';

const Authenticate = ({ children }: any) => {
    let isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== null) {
        isAuthenticated = JSON.parse(isAuthenticated);
    }

    if (!isAuthenticated) {
        return <LoginForm />;
    }

    return <>{children}</>;
};

export default Authenticate;
