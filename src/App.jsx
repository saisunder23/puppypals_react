import { puppyList } from './data.js'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // Log the puppyList array to the console
  console.log(puppyList)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/* Render the puppyList array */}
      <div>
        <h2>Puppy List</h2>
        <ul>
          {puppyList.map((puppy) => (
            <li key={puppy.id}>
              <strong>Name:</strong> {puppy.name} <br />
              <strong>Email:</strong> {puppy.email} <br />
              <strong>Age:</strong> {puppy.age} <br />
              <strong>Cuteness:</strong> {puppy.isCute ? 'Yes' : 'No'} <br />
              <strong>Owner ID:</strong> {puppy.ownerId} <br />
              <strong>Tricks:</strong> 
              <ul>
                {puppy.tricks.map((trick) => (
                  <li key={trick.id}>{trick.title}</li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
