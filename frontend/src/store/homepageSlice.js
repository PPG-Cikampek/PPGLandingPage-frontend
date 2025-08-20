import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Brand initial data removed — brand will be populated from API at runtime
    latestNews: [
        {
            title: "Judul 1",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, assumenda. Numquam ut itaque assumenda autem incidunt quos ad reiciendis rem nihil? Ex facilis neque architecto quas? Iusto explicabo veniam totam?",
        },
        {
            title: "Section 2",
            text: "Each section maintains its own background with backdrop blur, creating a frosted glass effect over the stacked background images.",
        },
        {
            title: "Section 3",
            text: "The background images are stacked with decreasing opacity, creating depth while maintaining content legibility.",
        },
    ],
};

const homepageSlice = createSlice({
    name: "homepage",
    initialState,
    reducers: {
        updateBrandData: (state, action) => {
            // Overwrite or merge brand data from API. No local static defaults are used.
            state.brand = {
                ...state.brand,
                ...action.payload,
            };
        },
        resetBrandData: (state) => {
            // Clear brand data when resetting (no local defaults to restore)
            state.brand = null;
        },
    },
});

export const { updateBrandData, resetBrandData } = homepageSlice.actions;

export default homepageSlice.reducer;
