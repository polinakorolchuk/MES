import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface CalculatorState {
  expression: string
  result: string
}

const initialState: CalculatorState = {
  expression: '',
  result: ''
}

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    appendValue: (state, action: PayloadAction<string>) => {
      state.expression += action.payload
    },
    clear: (state) => {
      state.expression = ''
      state.result = ''
    },
    calculate: (state) => {
      try {
        const evalResult = eval(state.expression)
        state.result = String(evalResult)
      } catch {
        state.result = 'Error'
      }
    }
  }
})

export const { appendValue, clear, calculate } = calculatorSlice.actions
export default calculatorSlice.reducer
