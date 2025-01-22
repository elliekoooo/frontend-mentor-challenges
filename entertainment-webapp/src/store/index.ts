import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";



const searchReducer = createSlice({
    name: "searchSlice",
    initialState: "",
    reducers: {
        get: (state: string) => {
            return state;
        },
        set: (state: string, action: PayloadAction<string>) => {
            return action.payload;      
        }
    }
});



const store = configureStore({
    reducer: {
        searchSlice: searchReducer.reducer
    }
});


export const { get, set } = searchReducer.actions;

export default store;