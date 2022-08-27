import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from "../services/actionIndex.js";

export const getClasses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchClasses();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createClass = (liveClass) => async (dispatch) => {
  const { data } = await api.createClass(liveClass);
  try {

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

// export const updateClass = (id, liveClass) => async (dispatch) => {
//   try {
//     const { data } = await api.updateClass(id, liveClass);

//     dispatch({ type: UPDATE, payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const deleteClass = (id) => async (dispatch) => {
//   try {
//     await await api.deleteClass(id);

//     dispatch({ type: DELETE, payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };
