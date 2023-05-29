import { configureStore } from "@reduxjs/toolkit";
import appStateReducer from "./appState/slice";

const store = configureStore({
    reducer: {
        appState: appStateReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from "./appState";
export default store;
