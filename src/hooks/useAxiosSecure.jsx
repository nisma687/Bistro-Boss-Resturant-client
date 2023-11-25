
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure=axios.create({
    baseURL:"http://localhost:5000",


});
const useAxiosSecure = () => {
    // request interceptors to add authorization header for every secure call to the api
    const navigate=useNavigate();
    const {logOut}=useAuth();
    axiosSecure.interceptors.request.use(function (config) {
        const token=localStorage.getItem('access-token');
        // console.log('request stopped by interceptors',token);
        config.headers.authorization=`Bearer ${token}`;
        // Do something before request is sent
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });
    //   response interceptors to handle error
    // 401 and 403 errors are handled here
        axiosSecure.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            
            return response;
        }, async(error)=> {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            const status=error.response.status;
            console.log('status error stopped by interceptors',status);
            // for 401 or 403 error we need to log out the user
            if(status===401 || status===403)
            {
                await logOut();
                navigate('/logIn');
                
            }
            return Promise.reject(error);
        });
   return axiosSecure;
};

export default useAxiosSecure;