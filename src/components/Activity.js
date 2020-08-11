import React from 'react'

const Activity = (props ) => {
    return (
        <div className={"activity-wrapper"}>
            <h1>Activity</h1>
            <p>Activity: {props.name}. Duration: {props.duration}</p>
            <button>Delete</button>
        </div>
    )
}

export default Activity
