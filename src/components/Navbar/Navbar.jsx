import React from 'react';
import logo from '../../assets/Den_logo.png';
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="header d-flex align-center">
            <div className="heading-title-icon d-flex align-center">
                <img className="icon mr-1" src={logo} alt="zip" />
                <h1 className="heading-main">
                    DEN
                </h1>
            </div>
            <div className="form-container d-flex align-center cursor-pointer shadow">
                <span className='form-option'>Any Where</span>
                <span className="border-right-1px"></span>
                <span className='form-option'>Any Week</span>
                <span className="border-right-1px"></span>
                <span className='form-option'>Add Guests</span>
                <span className="search material-symbols-outlined">search</span>
            </div>
            <nav className="d-flex align-center gap-large">
                <div className="navi d-flex align-center cursor-pointer">
                    <span className="material-icons-outlined profile-option menu">menu</span>
                    <span className="material-icons-outlined profile-option person">person</span>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;