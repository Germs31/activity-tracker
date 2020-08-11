import React, {useState} from 'react'
import Activity from './Activity'
import AddActivity from './AddActivity'
import { useSelector } from 'react-redux'

const Workouts = () => {
    const allActivities = useSelector((state) => state.activities)
    const [add, setAdd] = useState(false)
    return (
        <div className={"workouts-wrapper"}>
            <h1>My Workouts</h1>
            <button onClick={() => setAdd(!add)}>Add Activity</button>

            {add ? <AddActivity/> : null}

            {allActivities.map(a => {
                return <Activity 
                            key={a.id} 
                            name={a.name} 
                            duration={a.duration}
                            id={a.id}
                            />
            })}
        </div>
    )
}

export default Workouts
