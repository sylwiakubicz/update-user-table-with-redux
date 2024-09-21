import { configureStore } from '@reduxjs/toolkit';
import fetchUserDataReducer from "./user/userSlice";
import userFiltersReducer from "./usersFilters/userFiltersSlice";
import userSortSlice from './usersFilters/userSortSlice';


export const store = configureStore({
    reducer: {
        fetchUserData: fetchUserDataReducer,
        userFilters: userFiltersReducer,
        userSort: userSortSlice
    }
});

export type RootState = ReturnType<typeof store.getState>; 
export type AppDispatch = typeof store.dispatch


