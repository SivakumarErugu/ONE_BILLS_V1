import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Dummy from './components/ONEBILLS/Dummy/Dummy'
import Login from './components/ONEBILLS/LogIn/Login'
import SideNav from './components/ONEBILLS/SideNav/SideNav'
import Dashboard from './components/ONEBILLS/Dashboard/Dashboard'
import Clients from './components/ONEBILLS/Clients/Clients'

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Dummy />,
            index: true
        },
        {
            path: "/Dummy",
            element: <Dummy />,
            index: true
        },
        {
            element: <ProtectedRoute />,
            children:[
                {
                    path: "/login",
                    element: <Login />,
                },
                {
                    path: "/Dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "/Clients",
                    element: <Clients />,
                },
            ]
        }

    ]
)

export default router