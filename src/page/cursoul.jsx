import Container from 'react-bootstrap/Container';
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';


export default function Cursoul() {
    const [slideInfo] = useState([
        {
            id: 1,
            title: 'استشارات قانونية بمعايير عالمية المستوى',
            desc: 'بخبرة قانونية واسعة، نقدم استشارات قانونية لجميع العملاء من أيدي نخبة من أكفأ المحامين المتمرسين وأفضل الشركاء بمستوى جديد من الحلول القانونية المتكاملة. اطلب الآن استشارة قانونية فورية وتواصل مع أفضل مستشار قانوني واحصل على الدعم القانوني لحل قضاياك وتحقيق أهدافك.',
            shape: 'shape1'
        },
        {
            id: 2,
            title: 'مكتب محاماة دولي بمعايير أداء عالمية',
            desc: 'تعد المجموعة التجارية والبحرية أكبر مكتب محاماة دولي في مصر، وهذا يرجع لحجم القضايا الكبير التي تسلمها المكتب، والعملاء الدوليين والمحليين الذين تعاملوا معنا، بالإضافة إلى حجم وقوة العلاقات العامة وبروتوكولات التعاون المرتبطة بالمكتب. وقد اتخد المكتب مقره الرئيسي في قلب مدينة القاهرة ليكون منارة لتحقيق الأهداف القانونية لكافة عملائنا الكرام. تواصل الآن مع أفضل شركة محاماة رائدة في مصر.',
            shape: 'shape2'
        }
    ]);

    return (
        <section className='cursoul'>
            <Container>
                <Swiper
                    pagination={{
                        type: 'bullets', 
                        clickable: true, 
                    }}
                    modules={[Pagination , Autoplay]}
                    className="mySwiper"
                    autoplay={{ delay: 3000 }} 
                    speed={800}
                    loop={true} 
                    style={{ '--swiper-pagination-color': '#fff' , '--swiper-pagination-bullet-size': '10px'  }} // Change bullet color

                >
                    {slideInfo.map((item) => (
                        <SwiperSlide key={item.id} className='swiper-slide'>
                            <div className='slide'>
                                <h2>{item.title}</h2>
                                <div className="content-one-parent">
                                    <div>
                                        <h3>{item.desc}</h3>
                                    </div>
                                    <div className={item.shape}></div>
                                </div>
                                <div className="content-Link">
                                    <a href="#"> اطلب الان استشارة فورية<FaArrowLeft className='arrow-icon' /></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    )
}
