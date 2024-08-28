const initialState = {
    searchData: null
}

export const reducer = (state = initialState, action) => {
    if(action.type === "SEARCH_DATA"){
        return {
            searchData: action.data
        }
    }
    else{
        return state
    }
}