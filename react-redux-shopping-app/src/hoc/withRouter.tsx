import React from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

export interface WithRouterProps {
    location: ReturnType<typeof useLocation>;
    params: Record<string, string>;
    navigate: ReturnType<typeof useNavigate>;
}

export const withRouter = <Props extends WithRouterProps>(
    WrappedComponent: React.ComponentType<Props>
) => {
    return (props: Omit<Props, keyof WithRouterProps>) => {
        // making use of react-router-dom hooks in a functional component
        const location = useLocation();
        const params = useParams();
        const navigate = useNavigate();

        return (
            <WrappedComponent
                {...(props as Props)}
                location={location}
                params={params}
                navigate={navigate}
            />
        );
    };
};
