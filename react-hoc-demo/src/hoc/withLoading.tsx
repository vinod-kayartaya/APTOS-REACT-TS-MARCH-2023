const withLoading =
    (prop: string) => (WrappedComponent: React.ComponentType) => {
        return (props: any) => {
            const data = props[prop];

            if (!data || data.length === 0) {
                return <h3>Loading... pls wait.</h3>;
            }
            return <WrappedComponent {...props} />;
        };
    };

export default withLoading;
