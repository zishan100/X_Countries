import React from 'react'
import './Card.css'

export default function Card({name,url,alt}) {
  return (
    <div className="countryCard" >
        <img  
            src={url} 
            alt={alt} className="countryFlag" 
        />
        <h2 className="countryName">{name}</h2>
    </div>
  )
}
