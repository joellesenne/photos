import PropTypes from 'prop-types';
export default function Header({children}) {
    return (
        <header className="flex flex-colum items-center header">
            {children}
        </header>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};
