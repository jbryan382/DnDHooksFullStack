import React, { useState } from 'react'
import { recordAuthentication } from '../auth'

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name
    const updatedUser = { ...user, [fieldName]: value }
    setUser(updatedUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()

    if (apiResponse.status === 400) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      recordAuthentication(apiResponse)
      console.log(apiResponse)

      window.location.assign('/')
    }
  }

  return (
    <>
      {errorMessage && <p>{errorMessage}</p>}
      <h1>Login</h1>
      <div className="loginBox">
        <form onSubmit={(event) => handleFormSubmit(event)}>
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
