import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export function AClass() {
  const params = useParams()
  const id = params.class

  const [aClass, setAClass] = useState({});
  const [levels, setLevels] = useState([]);

  async function handleClassGet() {
    await axios.get(`http://www.dnd5eapi.co/api/classes/${id}`).then(response => {
      setAClass(response.data)
      console.log(response.data)
    })
  }

  async function handleLevelsGet() {
    await axios.get(`http://www.dnd5eapi.co/api/classes/${id}/levels`).then(resp => {
      setLevels(resp.data)
      console.log(resp.data)
    })
  }

  useEffect(() => {
    handleClassGet()
    handleLevelsGet()
  }, []);

  return (
    <>
      <h1>{aClass.name}</h1>
      <ul>
        {levels.map((level, key) => {
          return (
            <>
              <li key={key}>Level: {level.level}</li>
              <li key={key}>Proficiency Bonus: {level.prof_bonus}</li>
              <li key={key}>Ability Score Bonus: {level.ability_score_bonuses}</li>
              {/* <li key={key}>Arcane Recovery: {level.class_specific.arcane_recovery_levels}</li> */}
            </>
          )
        })}
      </ul>
    </>
  );
}
