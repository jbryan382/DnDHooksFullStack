import React, { useEffect, useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Monsters() {
  const [Monsters, setMonsters] = useState([])

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
      <h2>Total Monsters: {Monsters.count}</h2>
      <ul>
        {Monsters.length > 0 ? (
          Monsters.map((monster, key) => {
            return (
              <Link to={`/mlist/${monster.index}`} key={key}>
                <li>{monster.name}</li>
              </Link>
            )
          })
        ) : (
          <h2> Loading... </h2>
        )}
      </ul>
    </>
  )
}
