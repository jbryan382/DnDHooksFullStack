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
        <li>Size: {monster.size}</li>
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
              <td>{monster.strength}</td>
              <td>{monster.dexterity}</td>
              <td>{monster.constitution}</td>
              <td>{monster.intelligence}</td>
              <td>{monster.wisdom}</td>
              <td>{monster.charisma}</td>
            </tr>
          </tbody>
        </table>
        {monster.damage_immunities && monster.damage_immunities.length !== 0 ? (
          <>
            <li>Damage Immunities:</li>
            {monster.damage_immunities.map((immunity) => {
              return (
                <ul>
                  <li>{immunity}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <li>Damage Immunities: None</li>
        )}
        {monster.damage_resistances &&
        monster.damage_resistances.length !== 0 ? (
          <>
            <li>Damage Resistances:</li>
            {monster.damage_resistances.map((resistance) => {
              return (
                <ul>
                  <li>{resistance}</li>
                </ul>
              )
            })}
          </>
        ) : (
          <li>Damage Resistances: None</li>
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
          <li>Damage Vulnerabilities: None</li>
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
