import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import axios from 'axios'

export function Spell() {
  const params = useParams()
  const id = params.spell
  const [Spell, setSpell] = useState([])
  const [Classes, setClasses] = useState([])

  useEffect(() => {
    axios.get(`http://www.dnd5eapi.co/api/spells/${id}`).then((response) => {
      setSpell(response.data)
      setClasses(response.data.classes)
      console.log(response.data.classes)
    })
  }, [])

  return (
    <>
      <NavBar />
      <ul>
        <li>{Spell.name}</li>
        {Spell.level === 0 ? <li> Cantrip</li> : <li>Level: {Spell.level}</li>}
        <li>Casting Time: {Spell.casting_time}</li>
        <li>Materials: {Spell.material}</li>
        <li>Components: {Spell.components}</li>
        <li>Class(es):</li>
        {Classes.length === 1 ? (
          <ul>
            <li>{Classes[0].name}</li>
          </ul>
        ) : (
          Classes.map((spell) => {
            return (
              <ul>
                <li>{spell.name}</li>
              </ul>
            )
          })
        )}
        <li>{Spell.duration}</li>
        <li>
          {Spell.concentration === true ? (
            <li>Requires Concentration</li>
          ) : (
            <li>No Concentration</li>
          )}
        </li>
        <li>{Spell.desc}</li>
      </ul>
    </>
  )
}
