import { createSlice } from '@reduxjs/toolkit';

export const toDoSlice = createSlice ({
    name: 'todo',
    initialState: {
        id: 0, 
        text: 'Learn React', 
        completed: true
    }
}
);