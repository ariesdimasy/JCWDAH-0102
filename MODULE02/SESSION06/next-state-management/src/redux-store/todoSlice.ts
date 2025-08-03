import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []

}

export const todoSlice = createSlice({
    name: "todolist",
    initialState,
    reducers: {
        addTodo: (state: { todos: string[] }, action: { payload: string }) => {
            state.todos = [...state.todos, action.payload]
            localStorage.setItem("todos", JSON.stringify(state.todos))
        },
    }
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer