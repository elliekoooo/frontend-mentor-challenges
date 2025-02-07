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

const itemsReducer = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setItems : (state , action) => {
            state.items = action.payload;
        },
        change : (state  , action ) => {
            const itemId = action.payload;
            const seletedItem =  state.items.find(item => item.id === itemId)
            if(seletedItem){
                seletedItem.isBookmarked = !seletedItem.isBookmarked;
            }
        },
    },
});


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
        itemsReducer : itemsReducer.reducer,
        menuReducer: menuReducer.reducer
    }
});

export const { setItems, change } = itemsReducer.actions;
export const { get, set } = searchReducer.actions;
export const { curr } = menuReducer.actions;

export default store;