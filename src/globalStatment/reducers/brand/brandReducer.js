import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from "../../Type"

const initialState ={
    brands:[],
    loading:true
}
const brandReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_ALL_BRANDS:
            return {
              ...state,
                brands:action.payload.data,
                loading:false
            }
        case CREATE_BRAND:
            return{
                brands:action.payload,
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

export default brandReducer;