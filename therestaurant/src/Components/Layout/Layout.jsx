import { Outlet } from "react-router-dom";
import "./Layout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

export const Layout = () => {

    return (
        <>
            <header className="headerWrapper">
                <h1><a href="/">Restaurant name</a></h1>
                <h2><a href="/Reserve">Reservations</a></h2>
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
                    <a href="/"> Food Menu</a>
                    <p> | </p>
                    <a href="/Reserve"> Reservations</a>
                    <p> | </p>
                    <a href="/Contact"> Contact </a>
                    <p> | </p>
                    <a href="/Admin"> Admin </a>
                </div>

                <div className="rightFooterText">
                    <a href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                    <a href="https://instagram.com" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
            </footer>
        </>
    );
};