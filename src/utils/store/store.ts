import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import layoutReducer from '../reducers/layoutSlice'
import claimsReducer from '../reducers/claimsSlice'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    claims: claimsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
