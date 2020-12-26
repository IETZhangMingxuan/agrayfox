import apiAxios from './apiAxios'
export const getTestList = () =>{
    apiAxios.get("/test/getTestList")
}