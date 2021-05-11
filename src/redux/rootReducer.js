import { combineReducers } from "redux";

import { reducer as authReducer } from "./auth";
import { reducer as uiReducer } from "./ui";
import { reducer as crudReducer } from "./crud";
import { reducer as invoiceReducer } from "./invoice";
import { reducer as notifyReducer } from "./notify";
import { reducer as searchReducer } from "./search";

import * as actionTypes from "./auth/types";

// Combine all reducers.

const appReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  notify: notifyReducer,
  crud: crudReducer,
  invoice: invoiceReducer,
  search: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === actionTypes.LOGOUT_SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;