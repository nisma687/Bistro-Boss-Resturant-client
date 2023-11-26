import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {

    // const [menu,setMenu]=useState([]);
    const axios=useAxiosPublic();
    // jokhn intially hit korbe data or load korbe tokhn loading true hobe
    // const [loading,setLoading]=useState(true);
    // useEffect(()=>{
    //     fetch('http://localhost:5000/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         setLoading(false);
    //         // console.log(data);
    //     })
    // },[])
    const {data:menu=[],refetch,isPending:loading}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await axios.get('/menu');
            return res.data;
        }
    });
   return [menu,loading,refetch];
};

export default useMenu;