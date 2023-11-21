import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
       {
        path: "/",
        element:<Home />
       },
       {
        path:"/menu",
        element:<Menu />
       },
       {
        path:"/order/:category",
        element:<Order />
       },
       {
        path:"/logIn",
        element:<LogIn/>
       },
       {
        path:"/signUp",
        element:<SignUp/>
       },
       {
        path:'/secret',
        element:<PrivateRoute>
          <Secret/>
        </PrivateRoute>
        
       }
       
      ]

    },
  ]);

export default router;