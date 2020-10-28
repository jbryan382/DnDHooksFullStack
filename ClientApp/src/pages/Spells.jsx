import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import { Footer } from '../components/Footer'

export function Spells() {
  const [spells, setSpells] = useState([])
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios.get('http://www.dnd5eapi.co/api/spells/').then((response) => {
      setSpells(response.data.results)
      console.log('Initial Get')
      console.log(response.data.results)
    })
  }, [])

  // async function searchSpells() {
  //   //  event.preventDefault()
  //   axios
  //     .get(`http://www.dnd5eapi.co/api/spells/${searchTerm}`)
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
        <input
          type="text"
          placeholder="Search Spell"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
      <h1>Every Spell in D&D:</h1>
      {spells.length ? (
        <h3>Total Spells: {spells.length}</h3>
      ) : (
        <h3>Loading...</h3>
      )}
      <ul>
        {spells ? (
          spells.map((spell, key) => {
            return (
              <Link to={`/slist/${spell.index}`} key={key} id={spell.index}>
                <li>{spell.name}</li>
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
