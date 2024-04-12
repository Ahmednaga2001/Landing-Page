import Container from 'react-bootstrap/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from "swiper/modules"
import { FaArrowLeft, FaCrown } from "react-icons/fa6";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Img1 from "../assets/teamone.png";
import Img2 from "../assets/teamtwo.png"
import Img3 from "../assets/team3.jpeg"
function Team() {
    return (
        <section className='team'>
            <Container>
                <div className="team-content">
                    <h2>فريق العمل</h2>
                    <FaCrown className='team-icon' />

                    <p>تتكون الهيكلة الإدارية للمجموعة التجارية والبحرية من أشهر محامين مصر أصحاب الخبرات في تخصصات القضايا المحلية والدولية المختلفة. حيث يضم المحامي محمد أبو ضيف -الرئيس التنفيذي- مجموعة من الكوادر البشرية المتخصصة في مجالات القانون المختلفة. ولأن الجودة والسرعة هي شعارنا؛ نعمل بروح الفريق لدمج الخبرات والمعرفة المتراكمة في دعم عملائنا الكرام على تحقيق أهدافهم القانونية.</p>
                </div>
                <div className="swipper-container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay with a delay of 2 seconds
                        speed={600}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={'auto'} // Show only one slide at a time
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                        }}
                        modules={[EffectCoverflow, Autoplay]}

                    >
                        <SwiperSlide >
                            <div className='swiper-slide'>
                                <img src={Img1} alt="" />
                                <h4>محمد أبو ضيف</h4>
                                <span>الرئيس التنفيذي</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swiper-slide'>
                                <img src={Img2} alt="" />
                                <h4>رمضان رزق</h4>
                                <span>محامي أحوال شخصية</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swiper-slide'>
                                <img src={Img3} alt="" />
                                <h4>هشام محمود</h4>
                                <span>محامية جنائي</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div className='swiper-slide'>
                                <img src={Img1} alt="" />
                                <h4>محمد أبو ضيف</h4>
                                <span>الرئيس التنفيذي</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swiper-slide'>
                                <img src={Img2} alt="" />
                                <h4>رمضان رزق</h4>
                                <span>محامي أحوال شخصية</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='swiper-slide'>
                                <img src={Img3} alt="" />
                                <h4>هشام محمود</h4>
                                <span>محامية جنائي</span>
                            </div>
                        </SwiperSlide>
                        
                        </Swiper>
                </div>
                <div className="content-Link">
                        <a href="#">مشاهدة كامل الفريق<FaArrowLeft className='arrow-icon'/></a>
                        </div>

            </Container>

        </section>
    )
}

export default Team