
import { combineReducers } from "redux";
import { getAllCategoriesReducer } from "./category/getAllCategoryReudcer";
import brandReducer from "./brand/brandReducer";
import subCategoryReducer from "./subCategory/subCategoryReducer";

const rootReducer = combineReducers({
    allCategories:getAllCategoriesReducer,
    allBrands:brandReducer,
    allSubCategories:subCategoryReducer
});

export default rootReducer;