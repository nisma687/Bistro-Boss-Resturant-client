import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/DashBoard/ManageItems/ManageItems";
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
    {
      path:"/dashboard",
      element:<PrivateRoute>
        <DashBoard/>
      </PrivateRoute>,
      children:[
        // normal user routes
        {
          path:"/dashboard/cart",
          element:<Cart/>

        },
        // admin routes
        {
          path:"/dashboard/users",
          element:<AdminRoute>
            <AllUsers/>
          </AdminRoute>
        },
        {
          path:"/dashboard/addItems",
          element:<AdminRoute>
            <AddItems/>
          </AdminRoute>
        },
        {
          path:"/dashboard/manageItems",
          element:<AdminRoute>
             <ManageItems/>
          </AdminRoute>
         
        }

      ]
    }
  ]);

export default router;