import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import error from "./error";
import productReducer from "./product.reducer";

export default combineReducers({

    error: error,
    category: categoryReducer,  
    product: productReducer
 
});