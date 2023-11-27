import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaCookie, FaDollarSign, FaUser } from "react-icons/fa";



const AdminHome = () => {
    const {user}=useContext(AuthContext);
    const axiosSecure=useAxiosSecure();
    const {data:stats,refetch}=useQuery({
        queryKey:['admin-stast'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/admin-stats');
            console.log(res.data);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">
            <span>Hi,Welcome
              {user?.displayName? user.displayName :"Back"  }
            </span>
            </h2>
            <div>
            <div className="stats shadow">
  
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl">
    <FaDollarSign />
    </div>
    <div className="stat-title">Revenue</div>
    <div className="stat-value">
      ${stats?.revenue}
    </div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl">
     <FaUser />
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">
      {stats?.users}
    </div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  <div className="stat">
    <div className="stat-figure text-secondary text-5xl">
     <FaCookie />
    </div>
    <div className="stat-title">MenuItems</div>
    <div className="stat-value">
      {stats?.menuItems}
    </div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
    </div>
    <div className="stat-title">Orders</div>
    <div className="stat-value">
      {stats?.orders}
    </div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
            </div>

        </div>
    );
};

export default AdminHome;