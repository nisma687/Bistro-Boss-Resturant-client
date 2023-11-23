import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { FaGoogle } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";


const SocialLogin = () => {
    const {logInWithGoogle}=useAuth();
    const location=useLocation();
    const navigate=useNavigate();
    const axiosPublic=useAxiosPublic();

    const from=location.state?.from?.pathname || "/";
    const handleLoginWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
            const userInfo={
                email:user.email,
                name:user.displayName,
                photoUrl:user.photoURL,
            }
            axiosPublic.post("/users",userInfo)
            .then(res=>{
                console.log(res);
                Swal.fire({
                    title: "Login Successfully Done!!!",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from,{replace:true});
            })
            .catch(error=>{
                console.log(error);
            })
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className=" mt-2 mb-2">
        <button onClick={handleLoginWithGoogle} className=
        "btn btn-primary ">
          <FaGoogle className="mr-2"/>
          Login with Google
        </button>
        </div>
    );
};

export default SocialLogin;