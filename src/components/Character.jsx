import React from 'react'

// Styles
import './css/character.css'

const Character = ({ character }) => {
  return (
    <article className='character-card' key={character.id}>
      <div className='character-image'>
        <img src={character.image} alt={character.name}  />
      </div>
      <div className='character-info'>
        <div className='character-section'>
          <h2 className='character-name'>{character.name}</h2>
          <span className='character-status'>
            <span className={character.status === 'Alive' ? 'character-status-icon green' : 'character-status-icon red'}></span>
            {character.status} - {character.species}
          </span>
        </div>
        <div className='character-section'>
          <span className='text-gray'>Last Known location : </span>
          <span className='location'>{character.location.name} </span>
        </div>
        <div className='character-section'>
          <span className='text-gray'>First seen in : </span>
          <span className='location'>{character.origin.name} </span>
        </div>
      </div>
    </article>
  )
}

export default Character