import { ADD_SUBJECT, REMOVE_SUBJECT } from "../constants/actionTypes";

export const addSubject = (price) =>(dispatch) =>  {
    dispatch({type : ADD_SUBJECT, payload:price});
}

export const removeSubject = (price) => (dispatch) => {
    dispatch({type: REMOVE_SUBJECT, payload:price});
}