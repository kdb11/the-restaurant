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
                    <p>adress</p>
                    <p>nummer</p>
                </div>

                <div className="middleFooterText">
                    <a href="/"> mat</a>
                    <p> | </p>
                    <a href="/Reserve"> reservationer</a>
                    <p> | </p>
                    <a href="/Admin"> admin </a>
                </div>

                <div className="rightFooterText">
                    <a href="/">fb</a>
                    <a href="/">ig</a>
                </div>
            </footer>
        </>
    );
};