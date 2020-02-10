import React from 'react';
import PropTypes from 'prop-types';

const Iframe = ({ iframe }) => {
    return (
        <div>
            <iframe
                importance="high"
                allowFullScreen={true}
                id="Example2"
                title="Observatorio"
                width="100%"
                height="550"
                style={{ border: '3px solid black', borderRadius: '10px' }}
                src={iframe}>
            </iframe>

        </div>
    )
}
Iframe.propTypes = {
    iframe: PropTypes.string.isRequired,
}

export default Iframe