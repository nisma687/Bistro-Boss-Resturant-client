import { useEffect, useState } from "react";


const useMenu = () => {

    const [menu,setMenu]=useState([]);
    // jokhn intially hit korbe data or load korbe tokhn loading true hobe
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=>{
            setMenu(data);
            setLoading(false);
            // console.log(data);
        })
    },[])
   return [menu,loading];
};

export default useMenu;