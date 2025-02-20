
import { PayloadAction, configureStore, createSlice  } from "@reduxjs/toolkit";

//기존 json데이터
import rawData from '../assets/data.json';
import { comment, user } from "./types";

const dataReducer = createSlice({
    name: "data",
    initialState: rawData.comments,
    reducers: {
        sort: (state: comment[], _action: PayloadAction<comment[]>) => {
            state.sort((a,b)=> a.cid - b.cid);
        },
        add: (state: comment[], action:PayloadAction<comment>) => {
            state.push(action.payload);
        },
        edit: (state:comment[], action:PayloadAction<comment>) => {
            state.map((c:comment)=>{
                if(c.id == action.payload.id){
                    c.content = action.payload.content;
                }
                return c;
            });
        },
        del: (state:comment[], action:PayloadAction<number>) => {
            state.map((c:comment)=>{
                if(c.id == action.payload){
                    c.content = "[Deleted Comment]";
                    c.type = "d";
                }
                return c;
            });
        },
        score: (state:comment[], action:PayloadAction<{type: string, data: comment}>)=> {
            state.map((c:comment)=> {
                if(c.id == action.payload.data.id){
                    if(action.payload.type == "plus") c.score = c.score + 1;
                    else if(action.payload.type == "minus") c.score = c.score - 1;
                }
                return c;
            });
        }
    }
});

const userReducer = createSlice({
    name: "user",
    initialState: rawData.currentUser,
    reducers: {
        curr: (_state, action:PayloadAction<user>) => {
            return action.payload;
        }
    }
});


const buttonReducer = createSlice({
    name: "button",
    initialState: {id: 0, type: "", active: false},
    reducers: {
        active: (state, action:PayloadAction<{id: number, type:string, active:boolean}>) => {
            return {
                id: action.payload.id,
                type: action.payload.type,
                active: !state.active
            }
        },
        clear: (_state:{}) => {
            return {id: 0, type: "", active: false};
        }
    }
});



const store = configureStore({
    reducer: {
        data: dataReducer.reducer,
        user: userReducer.reducer,
        button: buttonReducer.reducer
    }
});



export const { sort, add, edit, del, score } = dataReducer.actions;
export const { curr } = userReducer.actions;
export const { active, clear } = buttonReducer.actions;

export default store;