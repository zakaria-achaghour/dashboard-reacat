import {
    ADD_PRODUCT,
    CLEAR_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
  } from "../types";
  
  const initialState = {
    products: [],
    product: {},
    loading: true,
  };
  export const productReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_PRODUCT:
        return {
          ...state,
          products: [...state.products, action.payload],
        };
  
      case GET_PRODUCTS:
        return { ...state, products: action.payload, loading: false };
  
      case DELETE_PRODUCT:
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.payload),
        };
  
      case GET_PRODUCT:
       // return { ...state, product: action.payload };
        return { ...state, product: state.products.find(product => product.id === action.payload.id) };
  
      case UPDATE_PRODUCT:
        return {
          ...state,
          products: state.products.map((product) =>
            product.id === action.payload.id
              ? (product = action.payload)
              : product
          ),
        };
  
  
      case CLEAR_PRODUCT:
        return { ...state, product: {} };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  