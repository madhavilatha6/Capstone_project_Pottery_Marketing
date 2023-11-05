import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SEARCH_PRODUCTS_REQUEST,
  GET_SEARCH_PRODUCTS_FAILURE,
  GET_SEARCH_PRODUCTS_SUCCESS,
} from "./actionTypes";

import axios from "axios";

export const getAllProductRequest = () => ({
  type: GET_ALL_PRODUCTS_REQUEST,
});

export const getAllProductFailure = (error) => ({
  type: GET_ALL_PRODUCTS_FAILURE,
  error,
});

export const getAllProductSuccess = (payload) => ({
  type: GET_ALL_PRODUCTS_SUCCESS,
  payload,
});

export const getAllProduct = () => (dispatch) => {
  dispatch(getAllProductRequest());
  axios
    .get("http://localhost:8080/products")
    .then((res) => dispatch(getAllProductSuccess(res.data)))
    .catch((error) => dispatch(getAllProductFailure(error)));
};

export const getSearchProductRequest = () => ({
  type: GET_SEARCH_PRODUCTS_REQUEST,
});

export const getSearchProductFailure = (error) => ({
  type: GET_SEARCH_PRODUCTS_FAILURE,
  error,
});

export const getSearchProductSuccess = (payload) => ({
  type: GET_SEARCH_PRODUCTS_SUCCESS,
  payload,
});

export const searchProducts = (searchQuery) => (dispatch) => {
  dispatch(getSearchProductRequest());
  axios
    .get(`http://localhost:8080/products/searchByName/${searchQuery}`)
    .then((res) => dispatch(getSearchProductSuccess(res.data)))
    .catch((error) => dispatch(getSearchProductFailure(error)));
};
