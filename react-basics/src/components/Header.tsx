import { Component } from 'react';

type HeaderProps = {
    title: string;
    subtitle?: string;
};

export class Header extends Component<HeaderProps> {
    render() {
        const { title, subtitle } = this.props;

        return (
            <>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </>
        );
    }
}

export default Header;
