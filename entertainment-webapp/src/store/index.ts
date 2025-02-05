import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

export const menuObject = {
    home: "movies or TV series",
    movie: "movies",
    tvseries: "TV series",
    bookmark: "Bookmarked shows"
} as any;

interface Thumbnail {
    trending: {
      small: string;
      large: string;
    };
    regular: {
      small: string;
      medium: string;
      large: string;
    };
}

interface item {
    id :  string;
    title: string;
    thumbnail: Thumbnail;
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
}

interface itemsState {
    items : item[];
}

const initialState : itemsState = {
    items : [],
};

const itemReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItem : (state , action) => {
            state.items = action.payload;
        },
        toggle : (state  , action ) => {
            const itemId = action.payload;
            const item = state.items.find(item => item.id === itemId);
                if(item){
                    item.isBookmarked = !item.isBookmarked;
                }
            
        },
    },
});

// const bookmarkReducer = createSlice({
//     name: "bookmarkReducer",
//     initialState: false,
//     reducers: {
//         change: (state: boolean, _action: PayloadAction<boolean>) => {
//             return !state;
//         }
//     }
// });


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
       // bookmarkReducer: bookmarkReducer.reducer,
        itemReducer : itemReducer.reducer,
        menuReducer: menuReducer.reducer
    }
});

export const { setItem, toggle } = itemReducer.actions;
export const { get, set } = searchReducer.actions;
export const { curr } = menuReducer.actions;
//export const { change } = bookmarkReducer.actions;

export default store;