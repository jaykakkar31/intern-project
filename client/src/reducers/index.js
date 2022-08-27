import { combineReducers } from "redux";

import liveClasses from "./liveClasses";
import auth from "./auth";
import batch from "./batch";
import payment from "./payment";
// import { payment } from "../components/Student/app/store";

export const reducers = combineReducers({ liveClasses, auth, batch, payment });
