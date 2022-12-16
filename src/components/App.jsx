import React, { useEffect, useState } from 'react'
import { getFetch, getCharacters } from '@/lib/fetch';
import "@/assets/styles/app.css";
function App() {
    const [characters, setCharacters] = useState([]);
    const [currentPageUrl,setCurrentPageUrl] = useState("https://rickandmortyapi.com/api/character");
    const [previousPage,setPreviousPage] = useState("");
    const [nextPage,setNextPage] = useState("");
    // pagination functions
    function gotoPrevPage(){
        setCurrentPageUrl(previousPage);
    }
    function gotoNextPage(){
        setCurrentPageUrl(nextPage);
    }
    useEffect(() => {
        const charactersFromAPI = getCharacters(currentPageUrl).then(data => {
            setCharacters(data.results);
            setPreviousPage(data.info?.prev);
            setNextPage(data.info?.next);
        });
    }, [currentPageUrl])
    return (
        <section className="section characters">
            <div className="container">
                <h2 className='characters-title'>Ricky And Morty</h2>
                <ul className="character-list">
                    {characters.map(character => {
                        const { id, name, status, species, image, episode, url, location, origin } = character;
                        return <li className='character-item' key={id}>
                            <img className='character-img' src={image} loading="lazy" alt="" />
                            <h3 className="character-name">
                                {name}
                            </h3>
                            <p className="character-status">
                                {status}
                            </p>
                            <p className="character-location">
                                {location.name}
                            </p>
                            <p className="location-origin">
                                {origin.name}
                            </p>
                        </li>
                    })}
                </ul>
                <div className="pagination-btns">
                    {previousPage ? <button className="prev-btn" onClick={gotoPrevPage}>
                        Prev
                    </button> : ""}
                    
                    {nextPage ? <button className="next-btn" onClick={gotoNextPage}>
                        Next
                    </button> : ""}
                </div>
            </div>
        </section>
    )
}

export default App