import React from 'react'
import Activity from './Activity'
import { useSelector } from 'react-redux'

const Workouts = () => {
    const allActivities = useSelector((state) => state.activities)
    return (
        <div className={"workouts-wrapper"}>
            <h1>My Workouts</h1>
            <button>Add Activity</button>
            {allActivities.map(a => {
                console.log(a)
                return <Activity key={a.id} name={a.name} duration={a.duration}/>
            })}
        </div>
    )
}

export default Workouts
