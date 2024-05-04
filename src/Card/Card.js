import React from 'react'
import style from './Card.module.css'

export default function Card({name,url,alt}) {
  return (
    <div className={style.container} >
        <img  
            src={url} 
            alt={alt} className={style.countryFlag} 
        />
        <h3 className={style.countryName}>{name}</h3>
    </div>
  )
}
