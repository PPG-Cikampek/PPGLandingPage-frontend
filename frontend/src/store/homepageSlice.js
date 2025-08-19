import { createSlice } from "@reduxjs/toolkit";
import logo from "../assets/logos/ppg.png";

const initialState = {
    brand: {
        logo,
        title: "PPG Cikampek",
        description:
            "PPG, singkatan dari Penggerak Pembina Generus, merupakan tim bertugas menggerakkan, mensupervisi, dan mendukung pelaksanaan pembinaan generus.",
        visionTitle: "Visi",
        visions: ["Visi 1", "Visi 2", "Visi 3"],
    },
    cards: [
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
    reducers: {},
});

export const {} = homepageSlice.actions;

export default homepageSlice.reducer;
