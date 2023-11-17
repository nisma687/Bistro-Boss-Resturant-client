import Foodcard from "../../../components/Foodcard/Foodcard";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const OrderTabPanel = ({items}) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <div >
               
                <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                {
                    items.map(item=><Foodcard key={item._id} item={item}/>)
                }
                </div>
        </SwiperSlide>
        
      </Swiper>
               </div>
    );
};

export default OrderTabPanel;