import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCard from "../../../hooks/useCard";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const Cart = () => {
    const [cart,refetch]=useCard();
    const totalPrice=cart.reduce((total,product)=>total+product.price,0);
    console.log(cart);
    const axiosSecure=useAxiosSecure();
    const handleDelete=(id)=>{
        // console.log("delete");
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
                axiosSecure.delete(`/carts/${id}`)
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
            <div className="m-4 grid grid-cols-3 gap-5">
            <h2 className="text-3xl ">Items:{cart?.length}</h2>
            <h2 className="text-3xl">Total Price:{totalPrice}</h2>
           {cart.length? <Link to="/dashboard/payment">
            <button  className="btn btn-primary w-1/2">Pay</button>
            </Link>:<button disabled className="btn btn-primary w-1/2">Pay</button>}
            </div>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>    
        </th>
        <th>Item</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((item,index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
                <span className="text-sm">{item.name}</span>
             
            </td>
            <td>${item.price}</td>
            <th>
              <button
              onClick={()=>handleDelete(item._id)}
               className="btn btn-ghost bg-red-800"
              ><RiDeleteBin6Fill className="text-white" />
              </button>
            </th>
          </tr>)
      }
      
   
    </tbody>
    {/* foot */}
    
  </table>
</div>

        </div>
    );
};

export default Cart;