import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const image_hosting_key=import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
    const { register,
         handleSubmit,reset } = useForm();
    const axiosPublic =useAxiosPublic();
    const axiosSecure=useAxiosSecure();
    const onSubmit =async (data) => 
    {
        console.log(data);
        // image upload to imgbb and then get an url then upload to database
        const imageFile={image:data.image[0]};
        const res=await axiosPublic.post(image_hosting_api,imageFile,{
            headers:{
                'content-type':'multipart/form-data'
            }
        });
        console.log(res.data);
        if(res.data.success)
        {
            // now add the menu items along with imgbb url and send the data to the database
            const menuItem={
                name:data.name,
                recipe:data.recipe,
                price:parseFloat(data.price),
                category:data.category,
                image:res.data.data.display_url

            }
            // now data has to send to the database but with secure api call as only admin can add data.
            const result=await axiosSecure.post('/menu',menuItem);
            console.log(result.data);
            if(result.data.insertedId)
            {
                // show success popup
                alert('successfully added the items');
                reset();
            }

        }

    }
    
    return (
       
        <div>
        <SectionTitle heading="add an item" subHeading="What's new?" ></SectionTitle>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>
                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-28" placeholder="Bio"></textarea>
                </div>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn">
                    Add Item <FaUtensils className="ml-4"></FaUtensils>
                </button>
            </form>
        </div>
    </div>


    );
};

export default AddItems;