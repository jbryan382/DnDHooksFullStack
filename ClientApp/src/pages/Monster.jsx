import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Monster() {
  const params = useParams()
  const id = params.monster
  const [monster, setMonster] = useState([])
  const [monsterActions, setMonsterActions] = useState([])
  const [monsterLegendaryActions, setMonsterLegendaryActions] = useState([])

  useEffect(() => {
    axios.get(`http://www.dnd5eapi.co/api/monsters/${id}`).then((response) => {
      setMonster(response.data)
      setMonsterActions(response.data.actions)
      setMonsterLegendaryActions(response.data.legendary_actions)
      console.log(params.monster)
      console.log(response.data)
      console.log(response.data.actions)
    })
  }, [])

  return (
    <>
      <NavBar />
      <h1>{monster.name}</h1>
      <ul>
        <li>Hit Points: {monster.hit_points}</li>
        <li>Hit Dice: {monster.hit_dice}</li>
        <li>CR: {monster.challenge_rating}</li>
        <li>AC: {monster.armor_class}</li>
        <li>Alignment: {monster.alignment}</li>
        <li>
          Actions and Legendary Actions: Actions:
          {monster ? (
            monster.actions.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  <ul>
                    <li>{action.desc}</li>
                  </ul>
                </ul>
              )
            })
          ) : (
            <li>Loading...</li>
          )}
          Legendary Actions:
          {monsterLegendaryActions.length > 0 ? (
            monsterLegendaryActions.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  <ul>
                    <li>{action.desc}</li>
                  </ul>
                </ul>
              )
            })
          ) : (
            <li>Loading...</li>
          )}
        </li>
      </ul>
    </>
  )
}
