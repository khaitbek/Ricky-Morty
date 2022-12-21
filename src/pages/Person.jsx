import Card from '@/components/Card/Card'
import { useParams } from 'react-router-dom';
import React, { useMemo, useState } from 'react'
import { getFetch, API } from '@/lib/fetch';

function Person() {
    const { id } = useParams();
    const [person, setPerson] = useState([]);
    useMemo(async () => {
        const singlePerson = await getFetch(`${API}/character/${id}`);
        setPerson([singlePerson])
    }, [])
    return (
        <ul className="character-list">
                {person.map(item => {
                    const {id,image,location,species,name,status} = item;
                    return <Card key={id} id={id} image={image} location={location.name} species={species} name={name} status={status} />
                })}
        </ul>
    )
}

export default Person