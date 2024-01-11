import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "./Store";

const initialState = {
    posts: {},
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getPosts(state, action){
            state.posts = action.payload;
        },
    },
});

export default postSlice.reducer;

export function SetPosts(post){
    return (dispatch, getState) => {
        dispatch(postSlice.actions.getPosts(post));
    };
}