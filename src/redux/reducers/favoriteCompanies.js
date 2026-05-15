import { ADD_FAVORITE_COMPANY, REMOVE_FAVORITE_COMPANY } from "../actions/index.js"

const initialState = []

const favoriteCompaniesReducer = (state = initialState, action) => {

  switch(action.type) {
    
    case ADD_FAVORITE_COMPANY:
      return [...state, action.payload]

    case REMOVE_FAVORITE_COMPANY:
      return state.filter((company) => company !== action.payload)

    default: return state
  }
}


export default favoriteCompaniesReducer