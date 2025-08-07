import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import utilitySliceReducer from "./slices/utilitySlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// Wrap the auth reducer in persistReducer with typed configuration

const persistedUtilityReducer = persistReducer(
  {
    key: "utility",
    storage,
  },
  utilitySliceReducer
);

// Configure the store with the typed reducers and middlewares
const store = configureStore({
  reducer: {
    utility: persistedUtilityReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
  devTools: true,
});

// Export the persistor and store
export const persistor = persistStore(store);
export default store;

// Define types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
