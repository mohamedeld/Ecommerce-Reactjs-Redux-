import useGetData from "../../../hooks/useGetData";
import { GET_ALL_CATEGORIES, GET_ERROR,CREATE_CATEGORY } from "../../Type";
import { useInsertDataWithImage } from "../../../hooks/useInsertData"

export const getAllCategories = (limit) =>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=${limit}`);
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

export const getAllCategoriesWithPage = (page) =>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/categories?limit=5&page=${page}`);
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


export const createCategory = (formData) => async (dispatch)=>{
    try {
        const response = await useInsertDataWithImage('/api/v1/categories',formData);
        dispatch({
            type:CREATE_CATEGORY,
            payload:response,
            loading:true
        })
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload:"Error "+error
        })
        
    }
}





