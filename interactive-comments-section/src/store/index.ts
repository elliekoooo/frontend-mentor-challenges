
import { PayloadAction, configureStore, createSlice  } from "@reduxjs/toolkit";

//기존 json데이터
import rawData from '../assets/data.json';
import { comment, user } from "./types";

const dataReducer = createSlice({
    name: "data",
    initialState: rawData.comments,
    reducers: {
        edit: (state:comment[], action:PayloadAction<{type: string, data: comment}>) => {
            if(action.payload.type == "reply"){
                state.map((c:comment)=>{
                    if(c.id == action.payload.data.id){
                        c.replies?.push(action.payload.data)
                    }else{
                        c.replies?.map(r => {
                           if(r.id == action.payload.data.id){
                                c.replies?.push(action.payload.data);
                           }
                        });
                    }
                })
            }else if(action.payload.type == "new") {
                state.push(action.payload.data);
            }else if(action.payload.type == "edit") {
                state.map((c:comment)=>{
                    if(c.id == action.payload.data.id){
                        c.content = action.payload.data.content;
                    }else{
                        c.replies?.map(r => {
                            if(r.id == action.payload.data.id){
                                r.content = action.payload.data.content;
                            }   
                        });
                    }

                    return c;
                });
            }

        },
        del: (state, action) => {
            state = state.filter((c)=>c.id != action.payload.id);   
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



export const { edit, del } = dataReducer.actions;
export const { curr } = userReducer.actions;
export const { active } = buttonReducer.actions;

export default store;