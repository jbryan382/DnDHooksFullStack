import React from 'react'
import { Link } from 'react-router-dom'

export function NavBar() {
  return (
    <>
      <header>
        <h1>DM D&D Companion</h1>
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
          </ul>
        </nav>
      </header>
    </>
  )
}
