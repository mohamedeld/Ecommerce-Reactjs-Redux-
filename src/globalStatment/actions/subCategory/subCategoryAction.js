import { useInsertData } from "../../../hooks/useInsertData";
import { CREATE_SUBCATEGORY, GET_ERROR } from "../../Type";

export const createSubCategory = (data)=> async (dispatch)=>{
    try {
        const response = await useInsertData(`/api/v1/subcategories`,data);
        dispatch({
            type:CREATE_SUBCATEGORY,
            payload:response
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:"Error "+error
        })        
    }
}