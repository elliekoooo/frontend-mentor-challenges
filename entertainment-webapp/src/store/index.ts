import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export const menuObject = {
    home: "movies or TV series",
    movies: "movies",
    tv_series: "TV series",
    bookmark: "Bookmarked shows"
} as any;


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

const menuReducer = createSlice({
    name: "menuReducer",
    initialState: "home",
    reducers: {
        curr: (state:any, _action: PayloadAction<string>) => {
            return _action.payload;
        }
    }
});


const store = configureStore({
    reducer: {
        searchReducer: searchReducer.reducer,
        bookmarkReducer: bookmarkReducer.reducer,
        menuReducer: menuReducer.reducer
    }
});


export const { get, set } = searchReducer.actions;
export const { change } = bookmarkReducer.actions;
export const { curr } = menuReducer.actions;

export default store;