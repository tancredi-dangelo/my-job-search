import { ADD_FAVORITE_JOB, REMOVE_FAVORITE_JOB } from "../actions/index.js"

const initialState = []


const favoriteJobsReducer = (state = initialState, action) => {
    switch(action.type) {
  
        case ADD_FAVORITE_JOB:
            return [...state, action.payload]

        case REMOVE_FAVORITE_JOB:
            return state.filter((job) => job._id !== action.payload)
        

        default: return state
    }
}


export default favoriteJobsReducer