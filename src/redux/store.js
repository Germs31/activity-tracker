// global redux state
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/rootReducer'

const store = createStore(
    // first reducers
    rootReducer,
    // middleware
    composeWithDevTools
)

export default store

