import{
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_SUCCESS,

    GET_SEARCH_PRODUCTS_REQUEST,
    GET_SEARCH_PRODUCTS_FAILURE,
    GET_SEARCH_PRODUCTS_SUCCESS,

    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_FAILURE,
    GET_PRODUCTS_SUCCESS
} from "./actionTypes";

import axios from "axios";

export const getallproductsrequest = () =>({
    type:GET_ALL_PRODUCTS_REQUEST,
});

export const getallproductsfailure = () =>({
    type:GET_ALL_PRODUCTS_FAILURE,
});

export const getallproductssuccess = (loadData) =>({
    type:GET_ALL_PRODUCTS_SUCCESS,
    loadData,
});





export const getsearchproductsrequest = () =>({
    type:GET_SEARCH_PRODUCTS_REQUEST,
});
export const getsearchproductsfailure = () =>({
    type:GET_SEARCH_PRODUCTS_FAILURE,
});
export const getsearchproductssuccess = (loadData) =>({
    type:GET_SEARCH_PRODUCTS_SUCCESS,
    loadData,
});


export const getproductsrequest = () =>({
    type:GET_PRODUCTS_REQUEST,
});
export const getproductsfailure = () =>({
    type:GET_PRODUCTS_FAILURE,
});
export const getproductssuccess = (loadData) =>({
    type:GET_PRODUCTS_SUCCESS,
    loadData
});