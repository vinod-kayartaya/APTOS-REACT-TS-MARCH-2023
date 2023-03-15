import { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';
import store from '../redux/store';

interface withAuthetnticationProps {}

export const withAuthetntication = <Props extends withAuthetnticationProps>(
    WrappedComponent: ComponentType<Props>
) => {
    return (props: Omit<Props, keyof withAuthetnticationProps>) => {
        const { isAuthenticated } = store.getState().authReducerState;

        if (!isAuthenticated) {
            return <Navigate to='/login' />;
        }

        return <WrappedComponent {...(props as Props)} />;
    };
};
