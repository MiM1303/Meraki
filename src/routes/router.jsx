import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error404 from "../pages/Error/Error404"
import Home from "../pages/Home/Home"

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
            
        ]
    }    
])

export default router;