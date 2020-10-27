import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <>
      <header>
        <h1>Welcome to my D&D Nerdy Domain</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/mlist">Monster List</Link>
            </li>
            <li>
              <Link to="/slist">Spell List</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
