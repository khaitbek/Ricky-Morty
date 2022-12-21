import React from 'react'
import { Link } from 'react-router-dom';

function Card(person) {
    const { id, image, name, status, location, species } = person;
    return (
        <li className='character-item' key={id}>
            <img className='character-img' src={image} loading="lazy" alt="character image" />
            <h3 className="character-name" title={`Character's name is ${name}`}>
                {name}
            </h3>
            <p className="character-status" title={`Character's status is ${status}`}>
                {status}
            </p>
            <p className="character-location" title={`Character's location is ${location.name}`}>
                {location.name}
            </p>
            <p className="character-species" title={`Character is ${species}`}>
                {species}
            </p>

            <Link to={`/person/${id}`} >Click to see more</Link>
        </li>
    )
}

export default Card