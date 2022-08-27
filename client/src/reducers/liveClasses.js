import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (liveClasses = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...liveClasses, action.payload];
    case UPDATE:
      return liveClasses.map((liveClass) =>
        liveClass._id === action.payload._id ? action.payload : liveClass
      );
    case DELETE:
      return liveClasses.filter(
        (liveClass) => liveClass._id !== action.payload
      );
    default:
      return liveClasses;
  }
};
