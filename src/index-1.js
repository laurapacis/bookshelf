// Render a React App – Render Logo and Title

import React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

import '@reach/dialog/styles.css'

const App = () => {
  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('login clicked')}>Login</button>
      </div>
      <div>
        <button onClick={() => alert('register clicked')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button>Close</button>
        </div>
      </Dialog>
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
