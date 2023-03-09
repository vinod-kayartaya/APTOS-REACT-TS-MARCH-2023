import { useEffect, useState } from 'react';

type WithUrlConfig = {
    url: string;
    prop: string;
};

const withUrl =
    (cfg: WithUrlConfig) => (WrappedComponent: React.ComponentType) => {
        return () => {
            // we shifted the code inside the component, since the hooks can only be used inside
            // of a 'functional component'
            const [data, setData] = useState([]);
            const props = { [cfg.prop]: data };

            // since the deps is an empty array, this effect is executed only once
            useEffect(() => {
                fetch(cfg.url)
                    .then((resp) => {
                        if (!resp.ok) {
                            throw new Error('Network response was not OK!');
                        }
                        return resp.json();
                    })
                    .then(setData);
            }, []);

            return (
                <>
                    <WrappedComponent {...props} />
                </>
            );
        };
    };

export default withUrl;
