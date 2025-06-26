import { configureStore, combineReducers } from '@reduxjs/toolkit'
import calculatorReducer from './reducers/CalculatorSlice'

const rootReducer = combineReducers({
  calculator: calculatorReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
