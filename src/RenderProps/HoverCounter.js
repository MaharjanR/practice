import React from 'react'

const HoverCounter = (props) => {
    return (
        <div>
            <h2 onMouseOver={props.increment}>Ritest hovered {props.count} time</h2>
        </div>
    )
}

export default HoverCounter
