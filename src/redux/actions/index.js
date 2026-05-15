export const REMOVE_FAVORITE_COMPANY = "REMOVE_FAVORITE_COMPANY"
export const ADD_FAVORITE_COMPANY = "ADD_FAVORITE_COMPANY"

export const REMOVE_FAVORITE_JOB = "REMOVE_FAVORITE_JOB"
export const ADD_FAVORITE_JOB = "ADD_FAVORITE_JOB"


export const handleFavoriteJob = (bool, data) => {
 if (bool === false) {
    return ({
        type: ADD_FAVORITE_JOB,
        payload: data
    })
 } else if (bool === true) {
    return ({
        type: REMOVE_FAVORITE_JOB,
        payload: data._id 
    })
 }
}


export const handleFavoriteCompany = (bool, company) => {
 if (bool === false) {
    return ({
        type: ADD_FAVORITE_COMPANY,
        payload: company
    })
 } else if (bool === true) {
    return ({
        type: REMOVE_FAVORITE_COMPANY,
        payload: company
    })
 }
}


