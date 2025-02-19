import PropTypes from 'prop-types';
export  default function Content({children}) {
    return (
        <section className="content">
            {children}
        </section>
    );
}

Content.propTypes = {
    name: PropTypes.string.isRequired,
    children: PropTypes.node
};
