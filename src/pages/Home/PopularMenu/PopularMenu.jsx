// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data.filter(item=>item.category==='popular'));
    //         // console.log(data);
    //     })
    // },[])
    const [menu,loading]=useMenu();
    const popularMenu=menu.filter(item=>item.category==='popular');
    // console.log(popularMenu);
    if(loading){
        return <h1 className="text-center text-2xl mt-12">Loading...</h1>
    }

    return (
        <section className="mb-12">
            <SectionTitle 
            subHeading="From Our Menu"
            heading="Popular Items" />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularMenu.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 mt-4 border-b-4">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;