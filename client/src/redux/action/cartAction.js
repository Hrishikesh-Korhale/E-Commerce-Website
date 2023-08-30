import axios from "axios";
import * as actionType from "../constants/cartConstants";

const URL = "http://localhost:8000";

export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);
    dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity } });
  } catch (error) {
    dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
};

export const clearCart = () => async (dispatch) => {
  dispatch({ type: actionType.CLEAR_CART });
};
