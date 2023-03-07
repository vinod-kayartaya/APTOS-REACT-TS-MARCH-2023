type FooterProps = {
    year: number;
    company: string;
};

const Footer = ({ year, company }: FooterProps) => {
    // local variables

    return (
        <div>
            &copy; {year} - All rights reserved by {company}.
        </div>
    );
};

Footer.defaultProps = {
    year: 2020,
    company: 'ACME Enterprise',
};

export default Footer;
