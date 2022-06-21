import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import './App.scss'
interface Person {
  name: string
  age: number
}
function App() {
  const [count, setCount] = useState<number>(0)
  const jack: Person = { name: 'Jack' }
  console.log('envInfo', import.meta.env)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-title">App test</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React! sss</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is test: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
