import {
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_SEARCH_PRODUCTS_REQUEST,
  GET_SEARCH_PRODUCTS_FAILURE,
  GET_SEARCH_PRODUCTS_SUCCESS,
} from "./actionTypes";

export const initState = {
  productData: [],
  error: "",
  loading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: "Something went wrong",
      };
    case GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: "",
        loading: false,
        productData: action.payload,
      };
    case GET_SEARCH_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_SEARCH_PRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case GET_SEARCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
