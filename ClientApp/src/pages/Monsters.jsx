import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function Monsters() {
  const [monsters, setMonsters] = useState([])
  const [cR, setCR] = useState('')

  useEffect(() => {
    handleMonsterGet()
  }, [cR])

  async function handleMonsterGet() {
    const specificCR = cR ? `?challenge_rating=${cR}` : ''
    await axios
      .get(`http://www.dnd5eapi.co/api/monsters${specificCR}`)
      .then((response) => {
        setMonsters(response.data.results)
        console.log(response.data.results)
      })
  }
  return (
    <>
      <NavBar />
      <h1>Monsters</h1>
      <select onChange={(event) => setCR(event.target.value)}>
        <option value="">Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="17">17</option>
        <option value="18">18</option>
        <option value="19">19</option>
        <option value="20">20</option>
        <option value="21">21</option>
        <option value="22">22</option>
        <option value="23">23</option>
        <option value="24">24</option>
        <option value="25">25</option>
      </select>
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
