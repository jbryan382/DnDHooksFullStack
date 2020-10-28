import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Monsters() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    axios.get('http://www.dnd5eapi.co/api/monsters').then((response) => {
      setMonsters(response.data.results)
      console.log(response.data.results)
    })
  }, [])
  return (
    <>
      <NavBar />
      <h1>Monsters</h1>
      {monsters.length ? (
        <h3>Total Monsters: {monsters.length}</h3>
      ) : (
        <h3> Loading... </h3>
      )}
      <ul>
        {monsters ? (
          monsters.map((monster, key) => {
            return (
              <Link to={`/mlist/${monster.index}`} key={key}>
                <li>{monster.name}</li>
              </Link>
            )
          })
        ) : (
          <></>
        )}
      </ul>
      <Footer />
    </>
  )
}
