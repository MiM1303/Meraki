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

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>, 
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/food')
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
                loader: () => fetch('http://localhost:5000/available-foods')
            },
            {
                path: "/food/:id",
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
            },
            {
                path: "/requested-foods",
                element: <PrivateRoute><RequestedFoods></RequestedFoods></PrivateRoute>
            },
            {
                path: "/my-foods/:email",
                element: <PrivateRoute><MyFoods></MyFoods></PrivateRoute>
            },
            
        ]
    }    
])

export default router;