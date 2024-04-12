
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';



import { Autoplay, Navigation } from 'swiper/modules';

import img1 from "../assets/slider1.jpeg"
import img2 from "../assets/slider2.jpeg"
import img3 from "../assets/slider3.jpeg"
export default function Slider() {
  return (
    <>
      <section className='slider'>
        <Swiper navigation={true} modules={[Navigation , Autoplay]} autoplay={{ delay: 3000 }}
          speed={800}
          loop={true} className="mySwiper" style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff', }}>
          <SwiperSlide className='swiper-slider2'>
            <img src={img1} alt="القاهرة" />
            <h2>القاهرة</h2>
          </SwiperSlide>
          <SwiperSlide className='swiper-slider2'>
            <img src={img2} alt="دبى" />
            <h2>دبى</h2>
          </SwiperSlide>
          <SwiperSlide className='swiper-slider2'>
            <img src={img3} alt="الرياض" />
            <h2>الرياض</h2>
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  );
}
