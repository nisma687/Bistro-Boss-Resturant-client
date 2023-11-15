
import chefservice from "../../../assets/home/chef-service.jpg";

const Description = () => {
    return (
        <div className="mb-20">
            <div className="absolute">
            <img src={chefservice} alt=""  />
            </div>
            <div className=" w-3/4 relative left-20 top-15 right-10 bottom-0 
            text-black bg-white bg-opacity-60 p-10 rounded-2xl
             ">
            <h3 className=" p-40 text-2xl text-center uppercase ">Bistro Boss</h3>
            </div>
        </div>
    );
};

export default Description;