import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import axios from 'axios'
import { Footer } from '../components/Footer'

export function Spells() {
  const [spells, setSpells] = useState([])
  const [spellLevel, setSpellLevel] = useState('')
  // const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    handleSpellsGet()
  }, [spellLevel])

  async function handleSpellsGet() {
    const specificSpellLevel = spellLevel ? `?level=${spellLevel}` : ''
    await axios
      .get(`http://www.dnd5eapi.co/api/spells${specificSpellLevel}`)
      .then((response) => {
        setSpells(response.data.results)
        console.log(response.data.results)
      })
  }

  // async function searchSpells() {
  //   //  event.preventDefault()
  //   axios
  //     .get(`http://www.dnd5eapi.co/api/spells/${searchTerm}`)
  //     .then((response) => {
  //       setSpells(response.data.results)
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
      <select onChange={(event) => setSpellLevel(event.target.value)}>
        <option value="">Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="1">8</option>
        <option value="1">9</option>
      </select>
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
