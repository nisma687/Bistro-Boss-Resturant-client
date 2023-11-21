import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const navigate=useNavigate();
  const onSubmit = (data) => {
                console.log(data);
                const email=data.email;
                const password=data.password;
                const name=data.name;
                const photoUrl=data.photoUrl;
                createUser(email,password)
                .then(result=>{
                    const user=result.user;
                    console.log(user);
                    // alert("User Created Successfully");
                    updateUserProfile(name,photoUrl)
                    .then(result=>{
                      console.log(result);
                      reset();
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User Created Successfully",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      navigate("/");
                    })
                    .catch(error=>{
                      console.log(error);
                    })
                })
                .catch(error=>{
                    console.log(error);
                })

                
              };
  // console.log(watch("example"))
    // const {createUser}=useContext(AuthContext);
    // const handleRegister=e=>{
    //     e.preventDefault();
    //     // console.log("login");
    //     const form=e.target;
    //     const email=form.email.value;
    //     const password=form.password.value;
    //     const name=form.name.value;
    //     console.log(email,password,name);
    //     createUser(email,password)
    //     .then(result=>{
    //         const user=result.user;
    //         console.log(user);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })

    // }
    return (
      <div className="hero min-h-screen bg-base-200">
       
       <Helmet>
        <title>Bistro Boss|signUp</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
         onSubmit={handleSubmit(onSubmit)}
           className="card-body">
            
            <div className="form-control">
              <label className="label">
          
                <span className="label-text">Name</span>
              </label>
              <input 
              type="text"  {...register("name", { required: true })}
               name="name" placeholder="Name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            {/* photo url */}
            <div className="form-control">
              <label className="label">
          
                <span className="label-text">Photo Url</span>
              </label>
              <input 
              type="text"  {...register("photoUrl", { required: true })}
               name="photoUrl" placeholder="Your Photo Url" className="input input-bordered" />
              {errors.photoUrl && <span className="text-red-600">Photo Url is required</span>}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email"
                name="email"
                {...register("email", { required: true })}
               placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text ">Password</span>
              </label>
              <input type="password"
                name="password" 
                {...register("password", 
                { required: true,
                   minLength: 6,
                   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/ ,
                    maxLength: 12 })}
              placeholder="password" className="input input-bordered"  />
               {errors.password?.type==="required" && <span className="text-red-600">Password is required</span>
               }
                {errors.password?.type==="pattern" && <span className="text-red-600">Password must contain at least one uppercase letter, one lowercase letter, one number and one special character</span>}
               {errors.password?.type==="maxLength" && <span className="text-red-600">Password must be with in 12 characters </span>
               }
              {
                errors.password?.type==="minLength" && <p className="text-red-600">Password must be At least 6 character long</p>
               }
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input 
              value="Register"
              type="submit" className="btn btn-primary"/>
             
            </div>
          </form>
          <div className="mt-2 mb-2">
            <p>New here?Please go to the
                <Link to="/logIn" className="text-blue-500">Login</Link> page
            </p>
        </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;