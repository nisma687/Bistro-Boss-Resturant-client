import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";

import { IoHome } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
const DashBoard = () => {
        return (
            <div className="flex">
                {/* side bar */}
            <div className="w-64 p-4  
                min-h-screen bg-orange-500">
            <ul className="menu mt-12">
              <li>

                 <NavLink
                    to="/dashboard/userHome"
                 className="uppercase"
                  >
                    <IoHome />
                    User Home</NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/reservation"
                 className="uppercase" >
                 <FaCalendarAlt />
                Reservation
                </NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/payment"
                 className="uppercase">
                 <FaMoneyCheck/>
                    Payment History</NavLink>
              </li>
              <li>
                 <NavLink to="/dashboard/cart"className="uppercase">
                    <FaShoppingCart/>
                    My Cart</NavLink>
              </li>
              <li>
                 <NavLink 
                 to="/dashboard/review"
                 className="uppercase" >
                    <MdOutlineRateReview/>
                    ADD REVIEW</NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/bookings"
                 className="uppercase" >
                    <TbBrandBooking/>
                    MY BOOKING</NavLink>
              </li>
              <div className="divider"></div>
              <li>
                 <NavLink
                    to="/"
                 className="uppercase"
                  >
                    <IoHome />
                   Home</NavLink>
              </li>
              <li>
                 <NavLink
                    to="/menu"
                 className="uppercase"
                  >
                   <FaSearch/>
                 Menu</NavLink>
              </li>
              <li>
                 <NavLink
                    to="/order/salad"
                 className="uppercase"
                  >
                   <FaShoppingCart/>
                  Order</NavLink>
              </li>
            </ul>
            </div>
                {/* dashboard content */}
                <div className="flex-1 p-8">
                    <Outlet />
                </div>
                
            </div>
        );
    };
    
export default DashBoard;