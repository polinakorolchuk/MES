import { useDispatch, useSelector } from 'react-redux'
import { appendValue, clear, calculate } from './store/reducers/CalculatorSlice'
import type { RootState, AppDispatch } from './store'

const Calculator = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { expression, result } = useSelector((state: RootState) => state.calculator)

  const handleClick = (value: string) => {
    dispatch(appendValue(value))
  }

  return (
    <div>
      <h2>Calculator</h2>
      <div>
        <div>Expression: {expression}</div>
        <div>Result: {result}</div>
      </div>
      <div>
        {'1234567890+-*/'.split('').map((char) => (
          <button key={char} onClick={() => handleClick(char)}>
            {char}
          </button>
        ))}
        <button onClick={() => dispatch(calculate())}>=</button>
        <button onClick={() => dispatch(clear())}>C</button>
      </div>
    </div>
  )
}

export default Calculator
