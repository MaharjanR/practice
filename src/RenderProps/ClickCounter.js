import React from 'react'

const ClickCounter = (props) =>{
    return (
        <div>
            <button onClick={props.increment}>Ritest clicked {props.count} time</button>
        </div>
    )
}

export default ClickCounter
