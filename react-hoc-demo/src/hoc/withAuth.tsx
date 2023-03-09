const withAuth = (WrappedComponent: React.ComponentType) => {
    return (props: any) => {
        // logic here
        let isAuthenticated = localStorage.getItem('isAuthenticated');
        if (isAuthenticated !== null) {
            isAuthenticated = JSON.parse(isAuthenticated);
        }

        if (!isAuthenticated) {
            return <h3>Login required.</h3>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default withAuth;
