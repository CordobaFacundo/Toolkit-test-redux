import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'

function App() {
  
  const { counter } = useSelector( state => state.counter)
  const dispath = useDispatch()
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>COUNT IS {counter}</p>
        
        <button onClick={() => dispath( increment() )}>
          increment
        </button>
        <button onClick={() => dispath( decrement() )}>
          decrement
        </button>
        <button onClick={() => dispath( incrementBy(2) )}>
          increment by 2
        </button>
      </div>
    </>
  )
}

export default App
