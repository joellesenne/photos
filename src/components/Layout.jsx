import PropTypes from 'prop-types';
export default function Layout({children}) {
    return (
        <main className="w-100 w-media container">
            {children}
        </main>
    );
}

Layout.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};