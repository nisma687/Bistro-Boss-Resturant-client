
// import { useEffect, useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import useMenu from "../../../hooks/useMenu";
// import Foodcard from "../../../components/Foodcard/Foodcard";
import OrderTabPanel from "../OrderTabPanel/OrderTabPanel";
import { useParams } from "react-router-dom";
import useMenu from "../../../hooks/useMenu";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
const Order = () => {
    // const [menu,setMenu]=useState([]);
    // // jokhn intially hit korbe data or load korbe tokhn loading true hobe
    // const [loading,setLoading]=useState(true);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         setMenu(data);
    //         console.log(data);
    //         setLoading(false);
    //         // console.log(data);
    //     })
    // },[])
    
    const categories=['Salad','Pizza','Soup','Dessert','Drinks'];
    const {category}=useParams();
    console.log(category);
    const initialIndex=categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu,loading]=useMenu();
   
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const drinks=menu.filter(item=>item.category==='drinks');
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
                     <Helmet>
        <title>Bistro Boss|Order</title>
      </Helmet>
            <Cover img={orderImg} title="Order Food" />
           <div>
           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Salad</Tab>
                <Tab>Pizza</Tab>
                 <Tab>Soup</Tab>
                <Tab>Dessert</Tab>
                <Tab>Drinks</Tab>

            </TabList>
            <TabPanel>
               {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
               {
                    salad.map(item=><Foodcard key={item._id} item={item}/>)
                }
               </div> */}
               <OrderTabPanel items={salad}/>

            </TabPanel>
            <TabPanel>
            <OrderTabPanel items={pizza}/>
            </TabPanel>
            <TabPanel>
            <OrderTabPanel items={soup}/>
            </TabPanel>
            <TabPanel>
            <OrderTabPanel items={dessert}/>
            </TabPanel>
            <TabPanel>
            <OrderTabPanel items={drinks}/>
            </TabPanel>
            </Tabs>
           </div>
        </div>
    );
};

export default Order;