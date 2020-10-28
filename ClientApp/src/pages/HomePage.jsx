import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'

export function HomePage() {
  return (
    <>
      <NavBar />
      <h2>Welcome!</h2>
      <div className="welcomeMessage">
        <p>
          This website is made for Dungeon and Dragons players, and Dungeon/Game
          Master's alike. This is currently a work in progress, but in the mean
          time please take a look.
        </p>
        <p>
          This website is using{' '}
          <a href="https://www.dnd5eapi.co/">https://www.dnd5eapi.co/</a> for my
          Dungeons and Dragons content rules as written. I will be working on my
          own ASP.Net backend with an experience tracker for DM's and groups.
          With hopefully a discord companion around the corner!
        </p>
      </div>
      <Footer />
    </>
  )
}
