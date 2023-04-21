import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {

    return (
        <>
            <header className="headerWrapper">
                <h1><a href="/">Restaurang namn</a></h1>
                <h2><a href="/Reserve">Reservationer</a></h2>
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
                    <a href="/Admin"> Admin </a>
                </div>

                <div className="rightFooterText">
                    <a href="/">fb</a>
                    <a href="/">ig</a>
                </div>
            </footer>
        </>
    );
};