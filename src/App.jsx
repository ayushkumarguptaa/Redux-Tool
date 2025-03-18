import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {useDispatch , useSelector} from 'react-redux'
import {increment , decrement , incrementByAmount} from './reduxTool/counterSlice'
function App() {

  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter.value)

  function handleIncrement(){
    dispatch(increment())
  }
  function handleDecrement(){
    dispatch(decrement())
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <p>counter : {counter}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}

export default App
