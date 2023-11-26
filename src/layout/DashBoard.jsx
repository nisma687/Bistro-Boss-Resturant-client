import { NavLink, Outlet } from "react-router-dom";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { IoHome } from "react-icons/io5";
import { FaMoneyCheck } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineRateReview } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import useAdmin from "../hooks/useAdmin";
const DashBoard = () => {
   // get admin value from database
   const [isAdmin]=useAdmin();
   console.log(isAdmin);
        return (
            <div className="flex">
                {/* side bar */}
            <div className="w-64 p-4  
                min-h-screen bg-orange-500">
            <ul className="menu mt-12">
             {
               isAdmin? <>
                <li>

                 <NavLink
                    to="/dashboard/adminHome"
                 className="uppercase"
                  >
                    <IoHome />
                   Admin Home</NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/addItems"
                 className="uppercase" >
                 <PiForkKnifeFill />
                  Add Items
                </NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/manageItems"
                 className="uppercase">
                 <FaMoneyCheck/>
                    Manage Items</NavLink>
              </li>
              <li>
                 <NavLink to="/dashboard/manageBookings"className="uppercase">
                    <FaShoppingCart/>
                    Manage Bookings</NavLink>
              </li>
              <li>
                 <NavLink 
                 to="/dashboard/users"
                 className="uppercase" >
                    <MdOutlineRateReview/>
                    All Users</NavLink>
              </li>
              <li>
                 <NavLink 
                    to="/dashboard/bookings"
                 className="uppercase" >
                    <TbBrandBooking/>
                    MY BOOKING</NavLink>
              </li>

               </>:
               <>
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
                    Payment
                    </NavLink>
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
                    to="/dashboard/paymentHistory"
                 className="uppercase" >
                    <TbBrandBooking/>
                    Payment history</NavLink>
              </li>
               </>
             }
              {/* shared content */}
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
              <li>
                 <NavLink
                    to="/order/contact"
                 className="uppercase"
                  >
                     <IoIosContacts/>
                   Contact
                  </NavLink>
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