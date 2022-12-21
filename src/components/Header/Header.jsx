import React from 'react'
import Character from '@/pages/Character';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="header-wrapper">
                    <Link className='site-logo' to="/">Logo</Link>
                    <nav className="site-nav">
                        <ul className="nav-list">
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (
                                    isActive ? "nav-link active" : "nav-link"
                                )} to="/">Characters</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (
                                    isActive ? "nav-link active" : "nav-link"
                                )} to="/episode">Episodes</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({isActive}) => (
                                    isActive ? "nav-link active" : "nav-link"
                                )} to="/location">Locations</NavLink>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>
        </header>
    )
}

export default Header