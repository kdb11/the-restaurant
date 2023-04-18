import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {

    return (
        <>
            <header className="wrapper">Header</header>
            <main className="wrapper">
                <Outlet />
                </main>
            <footer className="wrapper">
                <div className="footerText">
                    <p>adress</p>
                    <p>nummer</p>
                </div>

                <div className="footerText">
                    <a href="/"> mat | </a>
                    <a href="/Reserve"> reservationer | </a>
                    <a href="/"> gdpr | </a>
                    <a href="/"> admin </a>
                </div>

                <div className="footerText">
                    <a href="/">fb</a>
                    <a href="/">ig</a>
                </div>
            </footer>
        </>
    );
};