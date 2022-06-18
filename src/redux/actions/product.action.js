import productService from "../services/product.service";
import {
  ADD_PRODUCT,
  CLEAR_PRODUCT,
  DELETE_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCTS,
  SET_ERROR,
  UPDATE_PRODUCT,
} from "../types.js";

export const clearProduct = () => (dispatch) => {
  dispatch({
    type: CLEAR_PRODUCT,
  });
};

export const createProduct = (values) => async (dispatch) => {
  try {
    const res = await productService.add(values);
    dispatch({
      type: ADD_PRODUCT,
      payload: res.data,
    });

    return Promise.resolve(res);
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
    return Promise.reject(error);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const res = await productService.getAll();

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
    //console.log(res)
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
    return Promise.reject(error);

  }
};
export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await productService.get(id);

    dispatch({
      type: GET_PRODUCT,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};

export const updateProduct = (id, values) => async (dispatch) => {
  try {
    const res = await productService.update(id, values);

    dispatch({
      type: UPDATE_PRODUCT,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
    return Promise.reject(error);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await productService.remove(id);

    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
    return Promise.reject(error);
  }
};


