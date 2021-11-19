import React from 'react'
import PropTypes from 'prop-types';


export const ShowIncrement = ({ increment }) => {
    return (
        <button
            className='btn btn-success'
            onClick={ () => {
                increment(5);
            }}
        >
            Incrementar
        </button>
    )
}

ShowIncrement.propTypes = {
    increment: PropTypes.func.isRequired
}
