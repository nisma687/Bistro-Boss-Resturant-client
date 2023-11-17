

const Foodcard = ({item}) => {
    const {name,price,image,recipe}=item;
    return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <img src={image}alt="Shoes" /></figure>
    <p className="bg-slate-900 text-white w-[50px] absolute right-0 mr-4 mt-4 text-center ">${price}</p>
    <div className="card-body  flex flex-col items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end text-center">
        <button className="btn 
        bg-slate-100 border-orange-300
        btn-outline border-0 mt-4 border-b-4">Add To Cart</button>
        </div>
    </div>
    </div>
    );
};

export default Foodcard;