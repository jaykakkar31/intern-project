import { ADD_SUBJECT, REMOVE_SUBJECT } from "../constants/actionTypes";

export default(totalSubPay=0, action) => {
    switch (action.type) {
        case ADD_SUBJECT : 
           return totalSubPay+action.payload;
        case REMOVE_SUBJECT :
            return totalSubPay-action.payload;
        default : 
            return totalSubPay;
    }
};