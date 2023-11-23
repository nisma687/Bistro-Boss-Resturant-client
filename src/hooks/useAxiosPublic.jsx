import axios from "axios";

export const axiosSecurePublic=axios.create({
    baseURL:"http://localhost:5000",


});
const useAxiosPublic = () => {
    return axiosSecurePublic;
};

export default useAxiosPublic;