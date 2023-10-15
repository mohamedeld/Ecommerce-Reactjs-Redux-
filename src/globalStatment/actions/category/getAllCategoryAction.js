import useGetData from "../../../hooks/useGetData";
import { GET_ALL_CATEGORIES, GET_ERROR } from "../../Type";

export const getAllCategoriesAction = () =>async (dispatch)=>{
    try{
        const response = await useGetData('/api/v1/categories');
        dispatch({
            type:GET_ALL_CATEGORIES,
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:GET_ERROR,
            payload:"Error "+error
        })
    }
    
}