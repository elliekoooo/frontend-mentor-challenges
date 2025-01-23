import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";



const searchReducer = createSlice({
    name: "searchReducer",
    initialState: "",
    reducers: {
        get: (state: string) => {
            return state;
        },
        set: (_state: string, action: PayloadAction<string>) => {
            return action.payload;      
        }
    }
});

const bookmarkReducer = createSlice({
    name: "bookmarkReducer",
    initialState: false,
    reducers: {
        change: (state: boolean, _action: PayloadAction<string>) => {
            return !state;
        }
    }
});

const categoryReducer = createSlice({
    name: "categoryReducer",
    initialState: "home",
    reducers: {
        setCategory: (_state, action: PayloadAction<string>) => {
            return action.payload;            
        }
    }
});


const store = configureStore({
    reducer: {
        searchReducer: searchReducer.reducer,
        bookmarkReducer: bookmarkReducer.reducer,
        categoryReducer: categoryReducer.reducer
    }
});


export const { get, set } = searchReducer.actions;
export const { change } = bookmarkReducer.actions;
export const { setCategory } = categoryReducer.actions;

export default store;