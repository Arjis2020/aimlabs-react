import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import targetsReducer from './reducers/targets.reducer'
import modalReducer from './reducers/modal.reducer'
import scoreReducer from './reducers/score.reducer'

export const store = configureStore({
  reducer: {
    targets: targetsReducer,
    modals: modalReducer,
    score: scoreReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector