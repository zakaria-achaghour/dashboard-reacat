import { SET_ERROR, CLEAR_ERROR } from "../types";

const initialState = {
  error:{}
};

 const error =  (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ERROR:
      return { error: payload };

    case CLEAR_ERROR:
      return { error: "" };

    default:
      return state;
  }
}

export default error;
