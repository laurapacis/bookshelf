// Render a React App – Create a LoginForm Component

import * as React from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'

import '@reach/dialog/styles.css'

// create a login form that has a submit handler for this form
// render out a label for the username, and an input, and a label for the password as well as an input and then a Submit button
// down in the return, inside of these individual dialogues, render the login form with an onSubmit handler for login and the button text of login.
const LoginForm = ({onSubmit, buttonText}) => {
    // the submit handler grabs values username and password after preventing the default behavior of a full-page refresh + passes those values to the onSubmit handler
   
  const handleSubmit = (e) => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
        username: username.value,
        password: password.value,
        })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
      </div>
      <div>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

const App = () => {
  const [openModal, setOpenModal] = React.useState('none')

  const login = (formData) => {
      console.log('login', formData); // in the future, we'll be able to actually hit a backend to login the user
  }

  const register = (formData) => {
    console.log('register', formData);
}
  return (
    <>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
      <Dialog aria-label="Login form" isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <Dialog aria-label="Registration form" isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Register</h3>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
