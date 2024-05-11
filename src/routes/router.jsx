import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error404 from "../pages/Error/Error404"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/add-food',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            
        ]
    }    
])

export default router;