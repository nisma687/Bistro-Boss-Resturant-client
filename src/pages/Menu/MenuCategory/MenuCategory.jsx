import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";
import { Link } from "react-router-dom";

const MenuCategory = ({items,title,coverImg}) => {
    return (
        <div>
            {title &&  <Cover img={coverImg}
            title={title}
            />}
              <div className="grid md:grid-cols-2 gap-10 my-12 mb-12 p-4">
                {
                    items.map(item=><MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <Link 
            to={`/order/${title}`}
            className="
           ">
           <button className="btn
                     btn-outline border-0 border-b-4
            ">Order Now</button>
           </Link>
            
        </div>
    );
};

export default MenuCategory;