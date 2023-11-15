import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";

import "./Featured.css";
const Featured = () => {
    return (
        <div className="mt-2 mb-2 pt-8
        featured-item bg-fixed text-white">
            <SectionTitle 
            subHeading="Check it out"
            heading="Featured Items"
            />
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                <img src={featured} alt="" />
                </div>
                <div className="md:ml-10 text-white font-semibold">
                    <p>Aug 20,2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia est quidem sequi asperiores quasi at et, provident nemo culpa sed vitae minus, nesciunt libero laboriosam in ratione corporis illo eos.</p>
                    <button className="btn
                     btn-outline border-0 border-b-4
                      ">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;