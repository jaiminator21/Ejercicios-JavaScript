import React from 'react'

function Usuario(props) {
    return (
        <div className='person'>
            <h2>{props.name}</h2>
            <h3>{props.profesion}</h3>
        </div>
    )
}

export default Usuario