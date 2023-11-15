import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";


const Home = () => {
    return (
        <div className ="">
            <h2 className="text-3xl">This is Home Page</h2>
            <Banner />
            <Category />
            <Description />
        </div>
    );
};

export default Home;