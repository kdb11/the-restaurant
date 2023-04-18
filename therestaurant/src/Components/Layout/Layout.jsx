import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {

    return (
        <>
            <header className="wrapper">
                <h1> Restaurang namn </h1>
                <h2><a href="/Reserve">Reservationer</a></h2>
            </header>

            <main className="wrapper">
                <Outlet />
            </main>

            <footer className="wrapper">
                <div className="left--FooterText">
                    <p>adress</p>
                    <p>nummer</p>
                </div>

                <div className="middle--FooterText">
                    <a href="/"> mat</a>
                    <p> | </p>
                    <a href="/Reserve"> reservationer</a>
                    <p> | </p>
                    <a href="/"> gdpr</a>
                    <p> | </p>
                    <a href="/"> admin </a>
                </div>

                <div className="right--FooterText">
                    <a href="/">fb</a>
                    <a href="/">ig</a>
                </div>
            </footer>
        </>
    );
};