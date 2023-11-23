import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import {FaUserEdit} from "react-icons/fa";

import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";
const AllUsers = () => {
    const axiosSecure=useAxiosSecure();
    const {data:users=[],refetch}=useQuery({
        queryKey: ['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users');
            return res.data;
        }
    }) ;
    const handleMakeAdmin=(id)=>{
        console.log(id);
    
    }
    const handleDeleteUsers=(id)=>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res=>{
                    console.log(res.data);
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                    }
                    
                    
        
                })
                .catch(err=>console.log(err));
              
              
            }
          });
    }
    return (
        <div>
           <div className="flex justify-evenly my-4">
           <h2 className="text-4xl"> All Users</h2>
           <h2 className="text-4xl">Total Users:{users.length}</h2>
           </div>
           <div>
           <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>

    {
        users.map((user,index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            <button
                onClick={()=>handleMakeAdmin(user._id)}
               className="btn btn-ghost bg-yellow-800"
              ><FaUserEdit className="text-white" />
              </button>
            </td>
            <td>
            <button
            onClick={()=>handleDeleteUsers(user._id)}
               className="btn btn-ghost bg-red-800"
              ><RiDeleteBin6Fill className="text-white" />
              </button>
            </td>
          </tr>)
    }
     
    </tbody>
  </table>
</div>
           </div>
        </div>
    );
};

export default AllUsers;