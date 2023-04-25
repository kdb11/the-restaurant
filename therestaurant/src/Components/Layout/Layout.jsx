import { Outlet } from "react-router-dom";
import "./Layout.css";
import Pdf from '../Menu/therestaurantmenu.pdf';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Menu from "../Menu/Menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Layout = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [navBg, setNavBg] = useState("white");
    const location = useLocation();

    useEffect(()=>{ 
        if(location.pathname === "/"){
            setNavBg("white")
        }
        else {
            setNavBg("black")
        }
    },[location]);

    return (
        <>
            <header className="headerWrapper">
                <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
                    <FontAwesomeIcon icon={faBars} style={{color: navBg}} />
                </span>
                <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
                <div className="headerText">
                    <h1 style={{color: navBg}} ><a href="/">Restaurant name</a></h1>
                    <h3 style={{color: navBg}} ><a href="/Reserve">Reservations</a></h3>
                </div>
            </header>

            <main className="wrapper">
                <Outlet />
            </main>

            <footer className="wrapper">
                <div className="leftFooterText">
                    <p>155 W 51ST ST, NEW YORK, NY 10019</p>
                    <p>(212) 554-1515</p>
                </div>

                <div className="middleFooterText">
                    <a href={Pdf} target="_blank" rel="noreferrer"> Food Menu</a>
                    <p> | </p>
                    <a href="/Reserve"> Reservations</a>
                    <p> | </p>
                    <a href="/Contact"> Contact </a>
                    <p> | </p>
                    <a href="/Admin"> Admin </a>
                </div>

                <div className="rightFooterText">
                    <a className="icons" href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a className="icons" href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </footer>
        </>
    );
};