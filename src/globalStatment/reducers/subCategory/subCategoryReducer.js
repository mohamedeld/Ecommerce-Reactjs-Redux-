import { CREATE_SUBCATEGORY, GET_ERROR } from "../../Type"


const initialState = {
    subCategories:[],
    loading:true
}

const subCategoryReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_SUBCATEGORY:
            return{
                ...state,
                subCategories:action.payload,
                loading:false
            }
        case GET_ERROR:
            return{
                loading:true,
                payload:action.payload
            }
        default:
            return state
    }
}
export default subCategoryReducer;
