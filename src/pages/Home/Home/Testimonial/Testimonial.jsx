import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

const Testimonial = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReviews(data);
        })
    },[])
    return (
        <div className="mt-2 mb-2">
        <section className="my-20">
            <SectionTitle
            subHeading="What Our Customer Says"
            heading="Testimonials"
            />
            <div className="mt-2 mb-2
            ">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
       {
            reviews.map(review=> <SwiperSlide
            key={review._id}
            >
                <div className="mx-24 my-16 flex flex-col items-center">
                <Rating
            style={{ maxWidth: 180 }}
            value={review.rating}
            readOnly
            />
                    <p className="py-8">
                    {review.details}
                    </p>
                    <h3 className="text-2xl text-yellow-600">
                    {review.name}
                    </h3>
                </div>

            </SwiperSlide>)
       }
      </Swiper>
            </div>

        </section>

        </div>
        
    );
};

export default Testimonial;