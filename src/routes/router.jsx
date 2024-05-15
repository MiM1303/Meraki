import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error404 from "../pages/Error/Error404"
import Home from "../pages/Home/Home"
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import RequestedFoods from "../pages/RequestedFoods/RequestedFoods";
import MyFoods from "../pages/MyFoods/MyFoods";
import Update from "../pages/Update/Update";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://meraki-server.vercel.app/food')
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
            {
                path: '/available-foods',
                element: <AvailableFoods></AvailableFoods>,
                loader: () => fetch('https://meraki-server.vercel.app/available-foods')
            },
            {
                path: `/available-foods/sorted/:sort`,
                element: <AvailableFoods></AvailableFoods>,
                loader: ({params}) => fetch(`https://meraki-server.vercel.app/available-foods/sorted/${params.sort}`)
            },
            {
                path: `/available-foods/search/:searchText`,
                element: <AvailableFoods></AvailableFoods>,
                loader: ({params}) => fetch(`https://meraki-server.vercel.app/available-foods/search/${params.searchText}`)
            },
            {
                path: "/food/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`https://meraki-server.vercel.app/food/${params.id}`)
            },
            {
                path: "/requested-foods",
                element: <PrivateRoute><RequestedFoods></RequestedFoods></PrivateRoute>
            },
            {
                path: "/my-foods/:email",
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            {
                path: "/my-foods/update/:id",
                element: <PrivateRoute><Update></Update></PrivateRoute>,
                loader: ({params}) => fetch(`https://meraki-server.vercel.app/my-foods/update/${params.id}`)
            },
            
            
        ]
    }    
])

export default router;