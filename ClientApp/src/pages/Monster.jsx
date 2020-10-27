import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Monster() {
  const params = useParams()
  const id = params.monster
  const [Monster, setMonster] = useState([])
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
      <h1>{Monster.name}</h1>
      <ul>
        <li>Hit Points: {Monster.hit_points}</li>
        <li>Hit Dice: {Monster.hit_dice}</li>
        <li>CR: {Monster.challenge_rating}</li>
        <li>AC: {Monster.armor_class}</li>
        <li>Alignment: {Monster.alignment}</li>
        <li>
          Actions and Legendary Actions: Actions:
          {monsterActions.length > 0 ? (
            monsterActions.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  {/* {action.map((desc) => {
                    return (
                      <ul>
                        <li>{desc.desc}</li>
                      </ul>
                    )
                  })} */}
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
                  {/* {action.map((desc) => {
                    return (
                      <ul>
                        <li>{desc.desc}</li>
                      </ul>
                    )
                  })} */}
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
