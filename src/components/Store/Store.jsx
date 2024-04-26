import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../Store/Reducers/movieSlice";
import tvReducer from "../Store/Reducers/tvSlice";
import personReducer from "./Reducers/personSlice";

export const store = configureStore({
    reducer:{
        movie:movieReducer,
        tv:tvReducer,
        person:personReducer,
    }
})