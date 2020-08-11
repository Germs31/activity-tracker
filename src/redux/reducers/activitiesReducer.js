import {v4 as uuid} from 'uuid'

const initialState = [
    {
        id: 1,
        name: "gym",
        duration: "2hours"
    }
]

const activitiesReducer = (state= initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case "CREATE_ACTIVITY": 
            return [...state, {
                id: uuid(),
                name: payload.name,
                duration: payload.duration
            }]
        default: 
            return state
    }

    return state
}

export default activitiesReducer