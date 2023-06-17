import {createBrowserRouter} from "react-router-dom"; 
import Index from "./Index.jsx";
import Main from "../layouts/Main.jsx";
import Register from "./Register.jsx";
import Singin from "./Singin.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>, 
        children: [
            {path:"/", element: <Index/>},
            {path:"/index", element: <Index/>},
            {path:"/register", element: <Register/>},
            {path:"/singin", element: <Singin/>}
        ]
    }
])

export default router;