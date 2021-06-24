import React from 'react'
import { Link } from 'react-router-dom'
import { getUserId, isLoggedIn, logout } from '../auth'

export function NavBar() {
  const user = getUserId()

  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  return (
    <>
      <header>
        <h1>DM D&D Companion</h1>
        {isLoggedIn() && <p>Welcome back, {user.fullName}!</p>}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/mlist">Monster List</Link>
            </li>
            <li>
              <Link to="/slist">Spell List</Link>
            </li>
            <li>
              <Link to="/clist">Class List</Link>
            </li>
          </ul>
          <ul>
            {isLoggedIn() ? (
              <></>
            ) : (
                <>
                  <li>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </>
              )}
            {isLoggedIn() ? (
              <></>
            ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                </>
              )}
            {isLoggedIn() ? (
              <>
                <li>
                  <Link to='/' onClick={handleLogout}>Log out</Link>
                </li>
              </>
            ) : (
                <></>
              )}
          </ul>
        </nav>
      </header>
    </>
  )
}
