import PropTypes from 'prop-types';
export  default function Navigation({children}) {
    return (
        <nav className="w-100 w-media nav">
            {children}
        </nav>
    );
}

Navigation.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};
