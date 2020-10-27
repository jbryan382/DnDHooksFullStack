import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import { Spell } from './Spell'

export function Spells() {
  const [Spells, setSpells] = useState([])
  const [SearchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('http://www.dnd5eapi.co/api/spells/').then((response) => {
      setSpells(response.data.results)
      console.log('Initial Get')
      console.log(response.data.results)
    })
  }, [])

  // function searchSpells() {
  //   //  event.preventDefault()
  //   axios
  //     .get(`http://www.dnd5eapi.co/api/spells/${SearchTerm}`)
  //     .then((response) => {
  //       setSpells(response.data.results)
  //       console.log('Search')
  //       console.log(response.data.results)
  //     })
  // }

  return (
    <>
      <NavBar />
      {/* <form onSubmit={searchSpells()}>
             <input type="text" placeholder="Search Spell" onChange={event => setSearchTerm(event.target.value)}/>
             <button type="submit">Search</button>
         </form> */}
      <h1>Every Spell in D&D:</h1>
      <h2>Total Spells: {Spells.count}</h2>
      <ul>
        {Spells.length > 0 ? (
          Spells.map((spell, keys) => {
            return (
              <Link to={`/slist/${spell.index}`} key={keys} id={spell.index}>
                <li>{spell.name}</li>
              </Link>
            )
          })
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </>
  )
}
