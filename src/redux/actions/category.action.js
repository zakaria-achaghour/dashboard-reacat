import categoryService from "../services/category.service";
import {
  ADD_CATEGORY,
  CLEAR_CATEGORY,
  DELETE_CATEGORY,
  GET_CATEGORY,
  GET_CATEGORIES,
  SET_ERROR,
  UPDATE_CATEGORY,
} from "./../types.js";

export const clearCategory = () => (dispatch) => {
  dispatch({
    type: CLEAR_CATEGORY,
  });
};

export const createCategory = (values) => async (dispatch) => {
  try {
    const res = await categoryService.add(values);
    dispatch({
      type: ADD_CATEGORY,
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

export const getCategories = () => async (dispatch) => {
  try {
    const res = await categoryService.getAll();

    dispatch({
      type: GET_CATEGORIES,
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
export const getCategory = (id) => async (dispatch) => {
  try {
    const res = await categoryService.get(id);

    dispatch({
      type: GET_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: SET_ERROR,
      payload: error,
    });
  }
};

export const updateCategory = (id, values) => async (dispatch) => {
  try {
    const res = await categoryService.update(id, values);

    dispatch({
      type: UPDATE_CATEGORY,
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

export const deleteCategory = (id) => async (dispatch) => {
  try {
    const res = await categoryService.remove(id);

    dispatch({
      type: DELETE_CATEGORY,
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


