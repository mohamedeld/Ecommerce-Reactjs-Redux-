import { GET_ALL_CATEGORIES, GET_ERROR,CREATE_CATEGORY } from "../../Type"


const initialState = {
    categories:[],
    loading:true
}

export const getAllCategoriesReducer = (state=initialState,action)=>{
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
              ...state,
                categories:action.payload,
                loading:false
            }
        case CREATE_CATEGORY:
            return{
                categories:action.payload,
                loading:false
            }
        
        case GET_ERROR:
            return {
              ...state,
                loading:false
            }
        default:
            return state
    }
}