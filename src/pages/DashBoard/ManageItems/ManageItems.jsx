import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";

import { RiDeleteBin6Fill } from "react-icons/ri";
const ManageItems = () => {
    const [menu]=useMenu();
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
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
            <th>
            <button
            
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