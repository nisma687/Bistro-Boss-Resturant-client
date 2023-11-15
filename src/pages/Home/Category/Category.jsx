import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../../../../src/assets/home/slide1.jpg";
import slide2 from "../../../../src/assets/home/slide2.jpg";
import slide3 from "../../../../src/assets/home/slide3.jpg";
import slide4 from "../../../../src/assets/home/slide4.jpg";
import slide5 from "../../../../src/assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {

    return (
        <section className="mb-12">
            <SectionTitle subHeading="From 11am to 10pm" heading="Order Online" />
           <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h3 className="text-2xl text-white uppercase text-center -mt-12">SALAD</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt=""  />
            <h3 className="text-2xl text-white uppercase text-center -mt-12">PIZZA</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt=""  />
            <h3 className="text-2xl text-white uppercase text-center -mt-12">SOUP</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt=""  />
            <h3 className="text-2xl text-white uppercase text-center -mt-12">DESERT</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt=""  />
            <h3 className="text-2xl text-white uppercase text-center -mt-12">SALAD</h3>
        </SwiperSlide>
       
      </Swiper> 
        </section>
    );
};

export default Category;