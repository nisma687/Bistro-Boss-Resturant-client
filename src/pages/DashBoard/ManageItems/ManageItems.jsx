import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import {FaUserEdit} from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
const ManageItems = () => {
  const axiosSecure=useAxiosSecure();
  const [menu,loading,refetch]=useMenu();

  const handleEditItem=(id)=>{
    console.log(id);
    

  }
  const handleDeleteItem=(id)=>{
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    })
    .then((result) => {
      if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${id}`)
          .then(res=>{
              console.log(res.data);
              if(res.data.deletedCount>0){
                refetch();
                  Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                   
              }
              
              
  
          })
          .catch(err=>console.log(err));
        
        
      }
    });
     
        
        
  }
    
    return (
        <div>
            <SectionTitle
            subHeading="hurry up"
            heading="Manage All items"
            ></SectionTitle>
            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th>Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        menu.map((item,i)=> <tr key={item._id}>
            <th>
              {i+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-18">
                    <img src={item.image} />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
              <br/>
             
            </td>
            <td>{item.price}</td>
            <th>
            <Link to={`/dashboard/updateItem/${item._id}`}>
            <button
               onClick={()=>handleEditItem(item._id)}
               className="btn btn-ghost bg-yellow-800"
              ><FaUserEdit className="text-white" />
              </button>
            </Link>
            </th>
            <th>
            <button
              onClick={()=>handleDeleteItem(item._id)}
               className="btn btn-ghost bg-red-800"
              ><RiDeleteBin6Fill className="text-white" />
              </button>
            </th>
          </tr>)
     }
    
      

    </tbody>
   
    
  </table>
</div>
            </div>
        </div>
    );
};

export default ManageItems;