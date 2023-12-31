import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

import { Helmet} from 'react-helmet-async';

const Home = () => {
    return (
        <div className ="">
                        <Helmet>
        <title>Bistro Boss| Home</title>
      </Helmet>
            <h2 className="text-3xl">This is Home Page</h2>
            <Banner />
            <Category />
            <Description />
            <PopularMenu />
            <Featured />
            <Testimonial />
        </div>
    );
};

export default Home;