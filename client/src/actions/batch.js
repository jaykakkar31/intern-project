import { CREATE } from "../constants/actionTypes";
import * as api from "../services/actionIndex";

export const createBatch = (batch) => async (dispatch) => {
  try {
    const { data } = await api.createBatch(batch);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
