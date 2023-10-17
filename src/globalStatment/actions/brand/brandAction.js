import { CREATE_BRAND, GET_ALL_BRANDS, GET_ERROR } from '../../Type';
import useGetData from './../../../hooks/useGetData';
import { useInsertDataWithImage } from '../../../hooks/useInsertData';
export const getAllBrands = (limit)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands?limit=${limit}`)
        dispatch({
            type:GET_ALL_BRANDS,
            payload:response
        })
    }catch(error){
        dispatch({
            type:GET_ERROR,
            payload:'Error '+error
        })
    }
}

export const getAllBrandsWithPage = (page)=>async (dispatch)=>{
    try{
        const response = await useGetData(`/api/v1/brands?limit=5&page=${page}`)
        dispatch({
            type:GET_ALL_BRANDS,
            payload:response
        })
    }catch(error){
        dispatch({
            type:GET_ERROR,
            payload:'Error '+error
        })
    }
}

export const createBrand = (formData) => async (dispatch)=>{
    try{
        const response = await useInsertDataWithImage('/api/v1/brands',formData);
        console.log(response);
        dispatch({
            type:CREATE_BRAND,
            payload:response,
            loading:true
        })
    }catch(error){
        dispatch({
            type:GET_ERROR,
        payload:"Error "+error
        })
        console.log(error)
    }
}