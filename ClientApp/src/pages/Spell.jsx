import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
      <h3>{spell.name}</h3>
      <ul>
        {spell.level === 0 ? <li>Cantrip</li> : <li>Level: {spell.level}</li>}
        <li>Casting Time: {spell.casting_time}</li>
        {spell.material ? <li>Materials: {spell.material}</li> : <></>}
        <li>Components: {spell.components}</li>
        {spell.classes && spell.classes.length === 1 ? (
          <li>Class:</li>
        ) : (
            <li>Classes:</li>
          )}
        {spell.classes ? (
          spell.classes.map((s, key) => {
            return (
              <ul key={key}>
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
        {spell.concentration === true ? (
          <li>Requires Concentration</li>
        ) : (
            <li>No Concentration</li>
          )}
        <li>{spell.desc}</li>
      </ul>
    </>
  )
}
