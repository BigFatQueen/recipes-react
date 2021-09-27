import React from 'react'
import style from './Recepit.module.css'

function Recepit({ label, photo, ingredients, type, takentime }) {
  return (
    <div className='card'>
      <div className={style.imgdiv}>
        <img src={photo} className={style.img} />
      </div>
      <div className={style.content}>
        <h3 className={style.title}>{label}</h3>
        <ul>
          {ingredients.map((i) => (
            <li key={Math.random(1, 1000)}>{i.text}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Recepit
