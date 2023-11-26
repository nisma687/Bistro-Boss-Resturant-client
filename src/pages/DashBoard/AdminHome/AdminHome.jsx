import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";



const AdminHome = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h2 className="text-3xl text-center font-semibold">
            <span>Hi,Welcome
              {user?.displayName? user.displayName :"Back"  }
            </span>
            </h2>

        </div>
    );
};

export default AdminHome;