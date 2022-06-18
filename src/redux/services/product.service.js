import axios from "axios";
import { API_URL } from "../../helpers/constant";
// import authHeader from "./auth-header";



const add = (values) => {
    return axios.post(API_URL+ "v1/products",values
    // ,{headers: authHeader()}
    
    );
};



const getAll = () => {
    return axios.get(API_URL+ "v1/products"
    // ,{headers: authHeader()}
    );

  };
  
  const get = id => {
    return axios.get(API_URL+`v1/products/${id}`
    // ,{headers: authHeader()}
    );
  };

  const update = (id, values) => {
    return axios.put(API_URL+`v1/products/${id}`,values
    // ,{headers: authHeader()}
    );

  };
  
  const remove = id => {
    return axios.delete(API_URL+`v1/products/${id}`
    // ,{headers: authHeader()}
    );
  };
  
  
  

export default {add,update,remove,get,getAll};
