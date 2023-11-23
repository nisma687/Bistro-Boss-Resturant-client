
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCard from "../../hooks/useCard";



const Foodcard = ({item}) => {
    const {name,price,image,recipe,_id}=item;
    const {user}=useAuth();
    const navigate=useNavigate();
    const location=useLocation();
    const axiosSecure=useAxiosSecure();
    const [,refetch] =useCard();
    const handleAddToCart=(item)=>{
        
        
        if(user && user.email){
            // send items to the database
            console.log(item,user.email);
            const cartItem={
                menuId:_id,
                email:user.email,
                name,
                price,
                image

            }
            console.log(cartItem);
            axiosSecure.post("/carts",cartItem)
            .then(res=>{
                console.log(res.data);
                if(res.data.insertedId)
                {
                    Swal.fire({
                        title: "Success",
                        text: `${name} added to cart`,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        // confirmButtonColor: "#3085d6",
                        // cancelButtonColor: "#d33",
                        // confirmButtonText: "Go to cart"
                      });
                    //   .then((result) => {
                    //     if (result.isConfirmed) {
                    //         return navigate("/cart",{state:{from:location}}, { replace: true});
                    //     }
                    //   });
                    //   refetch cart
                    refetch();
                }
            }
        )
        }
        else{
            Swal.fire({
                title: "You aren't logged in yet",
                text: "Please log in to order/add to cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "yes,login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    return navigate("/logIn",{state:{from:location}}, { replace: true});
                }
              });
        }
        

    }
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <img src={image}alt="Shoes" /></figure>
    <p className="bg-slate-900 text-white w-[50px] absolute right-0 mr-4 mt-4 text-center ">${price}</p>
    <div className="card-body  flex flex-col items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end text-center">
        <button
        onClick={()=>handleAddToCart(item)}
         className="btn 
        bg-slate-100 border-orange-300
        btn-outline border-0 mt-4 border-b-4">Add To Cart</button>
        </div>
    </div>
    </div>
    );
};

export default Foodcard;