const Authenticate = ({ children }: any) => {
    let isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated !== null) {
        isAuthenticated = JSON.parse(isAuthenticated);
    }

    if (!isAuthenticated) {
        return <h3>Login required.</h3>;
    }

    return <>{children}</>;
};

export default Authenticate;
