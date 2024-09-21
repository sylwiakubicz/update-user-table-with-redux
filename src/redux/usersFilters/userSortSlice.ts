import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortProperties } from "../../interfaces/sortProperties";

const initialState : SortProperties = {
    sortDirection: 'ASC',
    columnName: 'name'
}

const userSortSlice = createSlice({
    name: "userSort",
    initialState,
    reducers: {
        sortAsc : (state, action : PayloadAction<string>) => {
            return {
                sortDirection: "ASC",
                columnName: action.payload
            }
        },
        sortDesc : (state, action : PayloadAction<string>) => {
            return {
                sortDirection: "DESC",
                columnName: action.payload
            }
        }
    }
})


export const { sortAsc, sortDesc } = userSortSlice.actions;

export default userSortSlice.reducer;