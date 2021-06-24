import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export function Classes() {

  const [classes, setClasses] = useState([]);

  async function handleClassesGet() {
    await axios
      .get(`http://www.dnd5eapi.co/api/classes`)
      .then((response) => {
        setClasses(response.data.results)
        console.log(response.data.results)
      })
  }
  useEffect(() => {
    handleClassesGet()
  }, []);
  return (
    <>
      <h1>Classes</h1>
      <ul>
        {classes.map((aClass, key) => {
          return (
            <Link to={`/clist/${aClass.index}`} key={key}>
              <li>{aClass.name}</li>
            </Link>
          )
        })}
      </ul>
    </>
  );
}
