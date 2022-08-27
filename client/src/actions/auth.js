import { AUTH } from "../constants/actionTypes";
import * as api from "../services/actionIndex.js";

export const educatorSignin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.educatorSignin(formData);

    dispatch({ type: AUTH, data });

    // router.push("/educator/personalInfo");
  } catch (error) {
    console.log(error);
  }
};

export const educatorSignup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.educatorSignup(formData);

    dispatch({ type: AUTH, data });

    // router.push('/');
  } catch (error) {
    console.log(error);
  }
};
