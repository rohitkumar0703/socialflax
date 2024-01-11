import { combineReducers } from "@reduxjs/toolkit";

import suerSlice from "./postSlice"
import themeslice from "./theme";
import postslice from "./postSlice";

const rootReducer = combineReducers({
    user: userSlice,
    theme: themeSlice,
    posts:postSlice,
});

export {rootReducer};