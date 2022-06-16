import {
    ADD_CATEGORY,
    CLEAR_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORY,
    GET_CATEGORIES,
    UPDATE_CATEGORY,
  } from "../types";
  
  const initialState = {
    categories: [],
    category: {},
    loading: true,
  };
  export const categoryReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case ADD_CATEGORY:
        return {
          ...state,
          categories: [...state.categories, action.payload],
        };
  
      case GET_CATEGORIES:
        return { ...state, categories: action.payload, loading: false };
  
      case DELETE_CATEGORY:
        return {
          ...state,
          categories: state.categories.filter((category) => category.id !== action.payload),
        };
  
      case GET_CATEGORY:
       // return { ...state, category: action.payload };
        return { ...state, category: state.categories.find(category => category.id === action.payload.id) };
  
      case UPDATE_CATEGORY:
        return {
          ...state,
          categories: state.categories.map((category) =>
            category.id === action.payload.id
              ? (category = action.payload)
              : category
          ),
        };
  
  
      case CLEAR_CATEGORY:
        return { ...state, category: {} };
  
      default:
        return state;
    }
  };
  
  export default categoryReducer;
  