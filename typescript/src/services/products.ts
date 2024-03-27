import instance from "@/configs/axios";
import { Iproduct } from "@/interfaces/products";
export const getAllProducts = async():Promise<Iproduct[]>=>{
    try{
        const response = await instance.get('/api/products');
        return response.data;
    }
    catch(err){
        return[];
    }
}

export const getAllProductById = async(id:number | string)=>{
    try{
        const response = await instance.get(`/api/products/${id}`);
        return response.data;
    }
    catch(err){
        return[];
    }
}
export const addProduct = async()=>{
    try{
        const response = await instance.post(`/api/products`);
        return response.data;
    }
    catch(err){
        return[];
    }
}