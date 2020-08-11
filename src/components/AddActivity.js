import React, {useState} from 'react'
import {useDispatch} from 'react-redux'

const AddActivity = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name: "",
        duration: ""
    })

    const handleChange = (e) => {
        e.persist()
        setData(prev => ({
            ...prev,
            [e.target.name]: [e.target.value]
        }))
    }

    const addActivity = () => {
        dispatch({
            type: "CREATE_ACTIVITY",
            payload: {
                name: data.name,
                duration: data.duration
            }
        })
    }

    return (
        <div>
            <div>
                <p>Activity</p>
                <input 
                    onChange={(e) => handleChange(e)} 
                    name="name" 
                    placeholder="Activity name..." 
                    />
                <p>Duration</p>
                <input 
                    onChange={(e) => handleChange(e)} 
                    name="duration" 
                    placeholder="Duration..." 
                    />

                <button onClick={addActivity}>Add</button>
            </div>
        </div>
    )
}

export default AddActivity
