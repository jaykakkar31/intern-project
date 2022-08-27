import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";

export default (batches = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...batches, action.payload];
    case UPDATE:
      return batches.map((batch) =>
        batch._id === action.payload._id ? action.payload : batch
      );
    case DELETE:
      return batches.filter((batch) => batch._id !== action.payload);
    default:
      return batches;
  }
};
