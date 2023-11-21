import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/Navbar/Navbar";


const Main = () => {
    const location=useLocation();
    console.log(location);
    const noHeaderFooter=location.pathname.includes('/logIn')|| location.pathname.includes('/signUp');
    
    // console.log(noHeaderFooter);
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
           {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;