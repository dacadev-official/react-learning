import React from 'react'
import PropTypes from 'prop-types';


export const GifGridItem = ({id, title, url}) => {
    return (
        <div className="card animate__animated animate__zoomIn">
            <img src={ url } alt={ title }/>
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
}