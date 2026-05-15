import { configureStore,combineReducers } from "@reduxjs/toolkit";
import favoriteCompaniesReducer from "../reducers/favoriteCompanies";
import favoriteJobsReducer from "../reducers/favoriteJobs";

const combinedReducer = combineReducers({
    favoriteCompanies: favoriteCompaniesReducer,
    favoriteJobs: favoriteJobsReducer
})


const store = configureStore({
    reducer: combinedReducer
})

export default store