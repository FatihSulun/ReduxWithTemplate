import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    product:[]//default ilk değeri
}
export const getProduct=createAsyncThunk('getCountry',async()=>{
    const {data}=await axios.get('https://fakestoreapi.com/products')
    return data;
})
export const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        // addProduct:()=>{
        //     //apiye ekleme işlemleri
        // },

    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            state.product=action.payload
        })
    }
})
// export const{addProduct}=productSlice.actions
export default productSlice.reducer//burdan aldığımzı verileri şimdi diğer tarafta disPatch edip kullanacağız.