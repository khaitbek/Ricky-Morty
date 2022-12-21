import { getFetch, API, MAX_PAGE_COUNT } from '@/lib/fetch';
import React, { useEffect, useMemo, useState } from 'react'
import Card from '@components/Card/Card';


function Episode({ currentPage, setCurrentPage }) {
  const [episode, setEpisode] = useState(1);
  const [episodeInfo, setEpisodeInfo] = useState({ date: "", title: "" });
  const [residents, setResidents] = useState([]);
  const [options, setOptions] = useState([]);

  function handleSelect(evt) {
    if (evt.target.value === "") return;
    setEpisode(evt.target.value);
  }

  useMemo(async () => {
    const episodes = await getFetch(`${API}/episode`);
    const episodeItem = await getFetch(`${API}/episode/${episode}`);

    setEpisodeInfo({
      date: (episodeItem.air_date),
      title: episodeItem.name
    })
    const episodeCount = episodes?.info?.count;
    const data = []
    episodeItem.characters.forEach(async (characterLink) => {
      const singleCharacter = await getFetch(characterLink)
      data.push(singleCharacter);
      if (data.length === episodeItem.characters.length) setResidents(data);
    })
    setOptions(Array(episodeCount).fill(episodeCount));

  }, [episode]);

  return <section className="episodes">
    <div className="container">
      <div className="episodes-wrapper">
        <div className="episode-info">
          <h3>{episodeInfo.title}</h3>

          <p>{episodeInfo.date}</p>
        </div>
        <select name="episode_select" onChange={handleSelect} className="episode-select">
          <option value="">Filter by episode number</option>
          {options.map((option, id) => (
            <option key={id} value={option - (option - id) + 1}>
              {`Episode - ${option - (option - id) + 1}`}
            </option>
          ))}
        </select>
        <ul className="character-list">
          {residents.map(character => {
            const { id, name, status, species, image, location } = character;
            return <Card key={id} id={id} image={image} location={location.name} species={species} name={name} status={status} />
          })}
        </ul>
      </div>
    </div>
  </section>
}

export default Episode