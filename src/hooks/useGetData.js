import baseUrl from "../Api/baseUrl"

const useGetData = async (url,params)=>{
    const response = await baseUrl.get(url,params);
    return response;
}
export default useGetData;