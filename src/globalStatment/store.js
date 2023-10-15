import { createStore,applyMiddleware } from "redux";

import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";
const initalizeState = {};
const middleware = [thunk]
const store = createStore(rootReducer,initalizeState,applyMiddleware(...middleware))

export default store;