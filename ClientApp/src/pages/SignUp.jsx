import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function SignUp() {
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatedUser = { ...newUser, [fieldName]: value }

    setNewUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })
    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }

  return (
    <>
      <NavBar />
      <h1>Sign Up</h1>
      <div className="signUpBox">
        <form onSubmit={(event) => handleFormSubmit(event)}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(event) => handleStringFieldChange(event)}
          />
          <input
            type="text"
            placeholder="Email Address"
            onChange={(event) => handleStringFieldChange(event)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(event) => handleStringFieldChange(event)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  )
}
