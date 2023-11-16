
import { Helmet} from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from "../../../assets/menu/banner3.jpg";
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
const Menu = () => {
    const [menu,loading]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');
    // console.log(menu);
    if(loading){
        return <div className="text-center">Loading...</div>
    }
    return (
        <div>
             <Helmet>
        <title>Bistro Boss|Menu</title>
      </Helmet>
      <Cover img={menuImg}
      title="Our Menu"
       />
       {/* main cover */}
       <SectionTitle 
         subHeading="Don't miss out"
            heading="Today's Offer"
       />
         {/* menu category offer */}
        <MenuCategory items={offered} />
        {/* menu category desert */}
        <MenuCategory items={dessert} title="Desert" coverImg={desertImg} />
        {/* menu category pizza */}
        <MenuCategory items={pizza} title="Pizza" coverImg={pizzaImg} />
        {/* menu category salad */}
        <MenuCategory items={salad} title="Salad" coverImg={saladImg} />
        {/* menu category soup */}
        <MenuCategory items={soup} title="Soup" coverImg={soupImg} />
        
       
     
        </div>
    );
};

export default Menu;