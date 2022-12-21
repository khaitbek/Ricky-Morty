import React, { useRef } from 'react'
import Card from '@components/Card/Card';
import Form from '../components/Form/Form';
import Pagination from '../components/Pagination/Pagination';
import { getFetch, API } from "@/lib/fetch";

function Character({ characters, data, setData, setCurrentPage, currentPage, info }) {
    const statusRef = useRef();
    const genderRef = useRef();
    const speciesRef = useRef();
    const searchInputRef = useRef();

    async function handleFilter() {
        const data = await getFetch(`${API}/character`, {
            status: statusRef.current.value,
            gender: genderRef.current.value,
            species: speciesRef.current.value
        });
        setData(data);
    }
    function deleteFilters(){
        statusRef.current.value = "";
        genderRef.current.value = "";
        speciesRef.current.value = "";
        handleFilter();

    }
    if (characters) return (
        <>
            <div className="d-flex">
                <div className="character-inner">
                    <button onClick={deleteFilters}>Delete filters</button>
                    <details>
                        <summary>
                            <h3>Filter by status</h3>
                        </summary>
                        <select onChange={handleFilter} ref={statusRef} name="status_filter">
                            <option value="">All</option>
                            <option value="alive">Alive</option>
                            <option value="dead">Dead</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </details>
                    <details>
                        <summary>
                            <h3>Filter by gender</h3>
                        </summary>
                        <select onChange={handleFilter} ref={genderRef} name="gender_filter">
                            <option value="">All</option>

                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="genderless">Genderless</option>
                            <option value="unknown">Unknown</option>
                        </select>
                    </details>
                    <details>
                        <summary>
                            <h3>Filter by species</h3>
                        </summary>
                        <select onChange={handleFilter} ref={speciesRef} name="species_filter">
                            <option value="">All</option>

                            <option value="human">Human</option>
                            <option value="alien">Alien</option>
                        </select>
                    </details>
                </div>
                <div className="character-outer">
                    <Form setData={setData} data={data} />
                    <ul className="character-list">
                        {characters.map(character => {
                            const { id, name, status, species, image, location } = character;
                            return <Card key={id} id={id} image={image} location={location.name} species={species} name={name} status={status} />
                        })}
                    </ul>
                    <Pagination setCurrentPage={setCurrentPage} pages={info?.pages || 1} />
                </div>
            </div>
        </>
    );

    return <h2>Loading...</h2>
}

export default Character