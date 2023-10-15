
import { combineReducers } from "redux";
import { getAllCategoriesReducer } from "./category/getAllCategoryReudcer";

const rootReducer = combineReducers({
    allCategories:getAllCategoriesReducer
});

export default rootReducer;