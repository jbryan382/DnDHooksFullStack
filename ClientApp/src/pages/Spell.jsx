import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import axios from 'axios'

export function Spell() {
  const params = useParams()
  const id = params.spell
  const [spell, setSpell] = useState([])

  useEffect(() => {
    axios.get(`http://www.dnd5eapi.co/api/spells/${id}`).then((response) => {
      setSpell(response.data)
      console.log(response.data)
    })
  }, [])

  return (
    <>
      <NavBar />
      <ul>
        <li>{spell.name}</li>
        {spell.level === 0 ? <li> Cantrip</li> : <li>Level: {spell.level}</li>}
        <li>Casting Time: {spell.casting_time}</li>
        <li>Materials: {spell.material}</li>
        <li>Components: {spell.components}</li>
        {spell.classes && spell.classes.length === 1 ? (
          <li>Class:</li>
        ) : (
          <li>Classes:</li>
        )}
        {spell.classes ? (
          spell.classes.map((s) => {
            return (
              <ul>
                <li>{s.name}</li>
              </ul>
            )
          })
        ) : (
          <ul>
            <li>Loading...</li>
          </ul>
        )}
        <li>{spell.duration}</li>
        <li>
          {spell.concentration === true ? (
            <li>Requires Concentration</li>
          ) : (
            <li>No Concentration</li>
          )}
        </li>
        <li>{spell.desc}</li>
      </ul>
    </>
  )
}
