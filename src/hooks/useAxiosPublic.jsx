import axios from "axios";

export const axiosSecurePublic=axios.create({
    baseURL:"https://bistro-boss-resturant-server-khaki.vercel.app",


});
const useAxiosPublic = () => {
    return axiosSecurePublic;
};

export default useAxiosPublic;