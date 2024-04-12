// import React from 'react';
import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow,  Autoplay} from "swiper/modules"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from "../assets/one.png";
import Img2 from "../assets/two.png";
import Img3 from "../assets/three.png";
import Img4 from "../assets/four.png";


export default function Advantages() {
  
    return (
        <section className='advantages'>
            <Container>
                <div className="advantages-content">
                    <h2>لماذا تختارنا وبكل ثقة؟</h2>
                    <p>يمتاز مكتبنا عن غيره من مكاتب المحاماة المعتمدة الأخرى في الأخلاقيات التي تسيّر آلية العمل داخل مكتبنا، بالإضافة إلى مبادئ المحامين والشركاء العاملين في المكتب والمؤمنين بأهمية تطوير الذات على المستوى العملي والقانوني سعيًا منهم لتحويل مكتبنا لشركة محاماة دولية في مصر. فقد شهد عملاؤنا بقوة مكتبنا وثقة التعامل معنا، والمبادئ التالية ما ستجدها عند التعامل معنا</p>
                </div>
                <div className="swipper-container">
                <Swiper
                  effect={'coverflow'}
                  grabCursor={true}
                  autoplay={{ delay : 2000 ,  disableOnInteraction: false }} // Autoplay with a delay of 2 seconds
                  speed={600}
                  loop={true}
                  slidesPerView={'auto'} // Show only one slide at a time
                  coverflowEffect={{
                      rotate: 0,
                      stretch: 0,
                      depth:100,
                      modifier: 3,
                  }}    
                  modules={[EffectCoverflow , Autoplay]}
          
                >
                    <SwiperSlide >
                        <div className='swiper-slide'>
                            <img src={Img1} alt="" />
                            <p>حلول قانونية سريعة</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slide'>
                            <img src={Img2} alt="" />
                            <p>رضاء العميل أولويتنا</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slide'>
                            <img src={Img3} alt="" />
                            <p>حفظ  أسرار العملاء</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiper-slide'>
                            <img src={Img4} alt="" />
                            <p>الثقة شعارنا</p>
                        </div>
                    </SwiperSlide>
                   
                 
                    {/* Add more SwiperSlide components for additional slides */}
                    </Swiper>
                </div>
    
            </Container>
        </section>
    );
}
