import baseUrl from "../Api/baseUrl"

const useInsertDataWithImage = async (url,params)=>{
    const config = {
        headers:{
            'Content-Type':'multipart/form-data'
        }
    }
    const response = await baseUrl.post(url,params,config);
    return response;
}

const useInsertData = async (url,params)=>{
    const response = await baseUrl.post(url,params);
    return response;
}



export {useInsertDataWithImage,useInsertData}