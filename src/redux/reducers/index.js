import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import error from "./error";

export default combineReducers({
    
    error: error,
    category: categoryReducer
 
});