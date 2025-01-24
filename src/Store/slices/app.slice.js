import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        navbar: {
            openMenu: false
        },
        plans: {
            planSelected: 'monthly'
        }
    },
    reducers: {
        toggleNavbarMenu: (state, action) => {
            state.navbar.openMenu = action.payload;
        },
        selectPlan: (state, action) => {
            state.plans.planSelected = action.payload;
        }
    }
})

export default appSlice.reducer;

export const {
    toggleNavbarMenu,
    selectPlan
} = appSlice.actions;