import React, { useEffect, useMemo, useState } from 'react'
import { getFetch, MAX_PAGE_COUNT } from '@/lib/fetch';
import { API } from '@/lib/fetch';
import Card from '@components/Card/Card';

function Location() {
  const [currentCharacters, setCurrentCharacters] = useState([]);
  const [options, setOptions] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(1);

  function handleSelect(evt) {
    if (!evt.target.value) return;
    setCurrentLocation(Number(evt.target.value));
  }

  useMemo(async () => {
    console.log(currentLocation);
    const allLocations = await getFetch(`${API}/location`);
    const singleLocation = await getFetch(`${API}/location/${currentLocation}`)
    const locationCount = allLocations?.info?.count;
    // get all residents
    const data = [];
    singleLocation?.residents.forEach((residentLink) => {
      const singleResident =  getFetch(residentLink).then(item => (
        setCurrentCharacters(previousItems => [...previousItems,item])
      ));
    });
    setCurrentCharacters(data);
    setOptions(Array(locationCount).fill(locationCount))
  }, [currentLocation]);



  return (
    <section className="locations">
      <div className="container">
        <div className="locations-wrapper">
          <h3></h3>
          <select name="location_select" onChange={handleSelect} className="location-select">
            <option value="">Select by location</option>
            {options.map((optionNumber, id) => (
              <option key={id} value={optionNumber - (optionNumber - id) + 1}>
                {`Location - ${optionNumber - (optionNumber - id) + 1}`}
              </option>
            ))}
          </select>
          <ul className="character-list">
            {currentCharacters.map(character => {
              const { id, name, status, species, image, location } = character;
              return <Card key={id} id={id} image={image} location={location.name} species={species} name={name} status={status} />
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Location