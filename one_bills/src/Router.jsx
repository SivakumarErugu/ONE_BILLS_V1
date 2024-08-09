import { createBrowserRouter } from "react-router-dom";

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Dummy from './components/ONEBILLS/Dummy/Dummy'
import Login from './components/ONEBILLS/LogIn/Login'
import Dashboard from './components/ONEBILLS/Dashboard/Dashboard'
import Clients from './components/ONEBILLS/Clients/Clients'
import Services from './components/ONEBILLS/Services/Services'
import Invoices from './components/ONEBILLS/Invoices/Invoices'
import Payments from './components/ONEBILLS/Payments/Payments'

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
                {
                    path: "/Services",
                    element: <Services />,
                },
                {
                    path: "/Invoices",
                    element: <Invoices />,
                },
                {
                    path: "/Payments",
                    element: <Payments />,
                },
            ]
        }

    ]
)

export default router