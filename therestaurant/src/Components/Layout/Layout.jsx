import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {

    return (
        <>
            <header className="wrapper">Header</header>
            <main className="wrapper">
                <Outlet />
                </main>
            <footer className="wrapper">Footer</footer>
        </>
    );
};