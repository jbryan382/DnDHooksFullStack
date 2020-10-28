import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Monster() {
  const params = useParams()
  const id = params.monster
  const [monster, setMonster] = useState([])

  useEffect(() => {
    axios.get(`http://www.dnd5eapi.co/api/monsters/${id}`).then((response) => {
      setMonster(response.data)
      console.log(response.data)
    })
  }, [])

  function handleModifier(stats) {
    return Math.floor((stats - 10) / 2)
  }
  return (
    <>
      <NavBar />
      <h1>{monster.name}</h1>
      <h4>
        {monster.size} {monster.type}, {monster.alignment}
      </h4>
      <ul>
        <li>AC: {monster.armor_class}</li>
        <li>
          Hit Points: {monster.hit_points}({monster.hit_dice})
        </li>
        {monster.speed ? (
          <>
            <li>Speed: {monster.speed.walk}</li>
            <ul>
              {monster.speed.fly ? <li>Flying: {monster.speed.fly}</li> : <></>}
              {monster.speed.swim ? (
                <li>Swimming: {monster.speed.swim}</li>
              ) : (
                <></>
              )}
              {monster.speed.burrow ? (
                <li>Burrowing: {monster.speed.burrow}</li>
              ) : (
                <></>
              )}
            </ul>
          </>
        ) : (
          <li>Loading...</li>
        )}
        {monster.senses ? (
          <>
            <li>Senses:</li>
            <ul>
              {monster.senses.darkvision ? (
                <li>Darkvision: {monster.senses.darkvision}</li>
              ) : (
                <></>
              )}
              {monster.senses.truesight ? (
                <li>Truesight: {monster.senses.truesight}</li>
              ) : (
                <></>
              )}
              <li>
                Passive Perception: {monster.senses.passive_perception} ft.
              </li>
            </ul>
          </>
        ) : (
          <li>Loading...</li>
        )}
        {monster.languages ? (
          <li>Languages: {monster.languages}</li>
        ) : (
          <li>Languages: None</li>
        )}
        <li>
          CR: {monster.challenge_rating} ({monster.xp} XP)
        </li>
        <li>Stats:</li>
        <table>
          <thead>
            <tr>
              <th>STR</th>
              <th>DEX</th>
              <th>CON</th>
              <th>INT</th>
              <th>WIS</th>
              <th>CHA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {monster.strength}({handleModifier(monster.strength)})
              </td>
              <td>
                {monster.dexterity}({handleModifier(monster.dexterity)})
              </td>
              <td>
                {monster.constitution}({handleModifier(monster.constitution)})
              </td>
              <td>
                {monster.intelligence}({handleModifier(monster.intelligence)})
              </td>
              <td>
                {monster.wisdom}({handleModifier(monster.wisdom)})
              </td>
              <td>
                {monster.charisma}({handleModifier(monster.charisma)})
              </td>
            </tr>
          </tbody>
        </table>
        {monster.damage_resistances &&
        monster.damage_resistances.length !== 0 ? (
          <>
            <li>Damage Resistances:</li>
            {monster.damage_resistances.map((resistance, key) => {
              return (
                <ul key={key}>
                  <li>{resistance}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {monster.damage_immunities && monster.damage_immunities.length !== 0 ? (
          <>
            <li>Damage Immunities:</li>
            {monster.damage_immunities.map((immunity, key) => {
              return (
                <ul key={key}>
                  <li>{immunity}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {monster.condition_immunities &&
        monster.condition_immunities.length !== 0 ? (
          <>
            <li>Condition Immunities:</li>
            {monster.condition_immunities.map((immunity, key) => {
              return (
                <ul key={key}>
                  <li>{immunity.name}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {monster.damage_vulnerabilities &&
        monster.damage_vulnerabilities.length !== 0 ? (
          <>
            <li>Damage Vulnerabilities:</li>
            {monster.damage_vulnerabilities.map((resistance) => {
              return (
                <ul>
                  <li>{resistance}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {monster.special_abilities ? (
          <>
            <li>Special Abilities:</li>
            {monster.special_abilities.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  <ul>
                    <li>{action.desc}</li>
                  </ul>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
        {monster.actions ? (
          <>
            <li>Actions:</li>
            {monster.actions.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  <ul>
                    <li>{action.desc}</li>
                  </ul>
                </ul>
              )
            })}
          </>
        ) : (
          <li>Loading...</li>
        )}
        {monster.legendary_actions ? (
          <>
            <li>Legendary Actions:</li>
            {monster.legendary_actions.map((action, key) => {
              return (
                <ul key={key}>
                  <li>{action.name}</li>
                  <ul>
                    <li>{action.desc}</li>
                  </ul>
                </ul>
              )
            })}
          </>
        ) : (
          <></>
        )}
      </ul>
    </>
  )
}
