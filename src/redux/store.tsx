import { configureStore } from "@reduxjs/toolkit";
import catFactReducer from "./catFactSlice";

// eslint-disable-next-line react-refresh/only-export-components
const store = configureStore({
  reducer: {
    catFact: catFactReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store
