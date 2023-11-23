import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCard = () => {
    const axiosSecure=useAxiosSecure();
    const {user}=useAuth();
    console.log(user);
    const {data:cart=[],refetch}=useQuery({
        queryKey:["cart",user?.email],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/carts?email=${user?.email}`);
            console.log(res.data);
            return res.data;
        },
 
    })
    return [cart,refetch];

//    tanstack query to get card data
};

export default useCard;