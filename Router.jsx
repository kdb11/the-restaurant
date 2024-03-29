import { createBrowserRouter } from 'react-router-dom'
import App from './App';
import { Reserve } from './Components/Reserve';
import { Contact } from './Components/Contact';
import { Layout } from './Components/Layout/Layout';
import { Admin } from './Components/Admin/Admin';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
                index: true,
            },

            {
                path: "/Reserve",
                element: <Reserve />
            },
        
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "/Admin",
                element: <Admin />
            }
        ]
    },
]);