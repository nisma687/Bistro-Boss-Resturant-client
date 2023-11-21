
import { useContext, useEffect,  useState } from 'react';
import {loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha} from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
const LogIn = () => {
    // const captchaRef=useRef(null);
    const [disable,setDisable]=useState(true);
    const {logIn,logInWithGoogle}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.form?.pathname || "/";
    const handleLogin=e=>{
        e.preventDefault();
        // console.log("login");
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        logIn(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
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

    }
    const handleLoginWithGoogle=()=>{
        logInWithGoogle()
        .then(result=>{
            const user=result.user;
            console.log(user);
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
        }
        )
        .catch(error=>{
            console.log(error);
        })
    }
    useEffect(()=>{
        loadCaptchaEnginge(7);
    },[])
    const handlevalidateCaptcha=(e)=>{
        const captchaValue=e.target.value;
        const result=validateCaptcha(captchaValue);
        if (result===true){
            setDisable(false);
        }
        else{
            setDisable(true);
        }

    }
    return (
        
           <div
            className=" mt-3 mb-3 p-4 hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center
    md:w-1/2
     lg:text-left">
      <Helmet>
        <title>Bistro Boss|LogIn</title>
      </Helmet>
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">

      <form 
      onSubmit={handleLogin}
      className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" 
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"
            name="password"
           placeholder="password" className="input input-bordered" required />
          <label className="label">
            {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
          </label>
        </div>
        <div className="form-control ">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text"
            name="captcha"
            onBlur={handlevalidateCaptcha}
            // ref={captchaRef}
           placeholder="type the captcha above" className="input input-bordered" required />
           {/* <button
          
            className="btn mt-4 btn-outline btn-xs btn-info">Validate</button> */}
        </div>
        <div className="form-control mt-6">
          
          <input
            value={"Login"}
            disabled={disable}
           type="submit" className="btn btn-primary"/>
        </div>
        <div className="mt-2 mb-2">
            <p>New here?Please go to the
                <Link to="/signUp" className="text-blue-500"> Sign In</Link> page
            </p>
            <button
            className="btn btn-primary mt-2"
            onClick={handleLoginWithGoogle}
            >LogIn With Google</button>
        </div>

      </form>
    </div>
  </div>
</div>
       
    );
};

export default LogIn;