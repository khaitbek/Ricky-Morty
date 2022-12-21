import React, { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { getFetch, getCharacters, API } from '@/lib/fetch';
import Header from '@components/Header/Header';
import Character from '@/pages/Character';
import Location from '@/pages/Location';
import Episode from '@/pages/Episode';
import "@/assets/styles/app.css";
import Pagination from './Pagination/Pagination';
import Form from './Form/Form';
import Person from '../pages/Person';
function App() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {info,results} = data;

    useMemo(async()=>{
        const charactersInfo = await getFetch(`${API}/character`,{
            page:currentPage
        });
        setData(charactersInfo);
    },[currentPage]);


    return (
        <>
            <Header />
            <section className="section characters">
                <div className="container">
                    <h2 className='characters-title'>Ricky And Morty</h2>
                    <Routes>
                        <Route path="/" element={<Character data={data} setData={setData} characters={results} setCharacters={setData} currentPage={currentPage} setCurrentPage={setCurrentPage} info={info}/>}/>
                        <Route path="/location/" element={<Location />}/>
                        <Route path="/episode/" element={<Episode  characters={results} setCharacters={setData} currentPage={currentPage} setCurrentPage={setCurrentPage} />}/>
                        <Route path="/person/:id" element={<Person />} />
                    </Routes>
                    
                </div>
            </section>
        </>
    )
}

export default App