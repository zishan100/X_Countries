import React from 'react'
import style from './Card.css'

export default function Card({name,url,alt}) {
  return (
    <div className="countryCard" >
        <img  
            src={url} 
            alt={alt} className="countryFlag" 
        />
        <h3 className="countryName">{name}</h3>
    </div>
  )
}
