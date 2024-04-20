import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState =

{todos:[{
    id:1 , text:"Hello World"
}]}


export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addtodo:(state,action) =>{
            const todo = {
                text:action.payload,
                id:nanoid()
            }
            state.todos.push(todo)
        },

        removetodo:(state , action) => {
            state.todos =  state.todos.filter(item =>  item?.id  !==  action.payload)
        }
    },


})


 export const {addtodo , removetodo} = todoSlice.actions;
 export  default todoSlice.reducer;