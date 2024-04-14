import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft, FaCrown } from 'react-icons/fa6';
import { PiQuotesThin } from 'react-icons/pi';
import reviewImg1 from "../assets/reviewone.png"
import reviewImg2 from "../assets/reviewstwo.png"
import reviewImg3 from "../assets/reviewthree.png"
import reviewImg4 from "../assets/reviewfour.png"
import { SiPowerautomate } from "react-icons/si";

import { useEffect, useState } from 'react';
function Reviews() {
    const data = [
        {
            title: 'مكاتب محاماة اقليمية',
            value: [7, 6, 5]
        },
        {
            title: 'سنين الخبرة',
            value: [50, 30, 40]
        },
        {
            title: 'عدد الخبراء',
            value: [40, 20, 30]
        },
        {
            title: 'العملاء',
            value: [300, 750, 600]
        },
    ]
    const [valuesOne, setValueOne] = useState(7);
    const [valuesTwo, setValueTwo] = useState(50);
    const [valuesThree, setValueThree] = useState(40);
    const [valuesFour, setValueFour] = useState(300);

    const [currentIndexOne, setCurrentIndexOne] = useState(0);
    const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
    const [currentIndexThree, setCurrentIndexThree] = useState(0);
    const [currentIndexFour, setCurrentIndexFour] = useState(0);

    useEffect(() => {
        const intervalOne = setInterval(() => {
            console.log(currentIndexOne)
            setValueOne(data[0].value[currentIndexOne]);
            setCurrentIndexOne((prevIndex) => (prevIndex + 1) % data[0].value.length);
        }, 5000);

        const intervalTwo = setInterval(() => {
            setValueTwo(data[1].value[currentIndexTwo]);
            setCurrentIndexTwo((prevIndex) => (prevIndex + 1) % data[1].value.length);
        }, 5000);

        const intervalThree = setInterval(() => {
            setValueThree(data[2].value[currentIndexThree]);
            setCurrentIndexThree((prevIndex) => (prevIndex + 1) % data[2].value.length);
        }, 5000);

        const intervalFour = setInterval(() => {
            setValueFour(data[3].value[currentIndexFour]);
            setCurrentIndexFour((prevIndex) => (prevIndex + 1) % data[3].value.length);
        }, 5000);

        return () => {
            clearInterval(intervalOne);
            clearInterval(intervalTwo);
            clearInterval(intervalThree);
            clearInterval(intervalFour);
        };
    }, [currentIndexOne, currentIndexTwo, currentIndexThree, currentIndexFour]);

    return (
        <section className='reviews'>
            <Container>
                <div className="reviews-title">
                    <h2>آراء عملائنا الكرام</h2>
                    <FaCrown className='team-icon' />
                </div>

                <Row style={{ marginTop: '100px'  }}>
                    <Col xs={12} md={6} lg={3}>
                        <div className="reviews-bottom">
                            <div className="reviews-bottom-top">
                                <div className="reviews-icons">
                                    {/* <PiQuotesThin />
                                    <PiQuotesThin /> */}
                                    <SiPowerautomate className='reviews-icon'/>
                                    <SiPowerautomate className='reviews-icon'/>
                                </div>
                                <p>
                                    تعاقدي مع مكتب المحامي محمد أبو ضيف وشركائه الخبراء مكَّنني على تحقيق أهدافي القانونية بداية من كتابة العقود وحتى تأسيس الشركة في مصر الحبيبة. حقاً أنا أقدر ذلك
                                </p>
                            </div>
                            <div className="reviews-header">
                                <div>
                                    <h4>أستاذ أحمد سليم</h4>
                                    <span>مستثمر ورجل أعمال</span>
                                </div>
                                <img src={reviewImg1} alt="reviews" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="reviews-top">
                            <div className="reviews-header">
                                <div>
                                    <h4>أستاذة فاطمة عيسى</h4>
                                    <span>رائدة أعمال</span>
                                </div>
                                <img src={reviewImg2} alt="reviews" />
                            </div>
                            <div className="reviews-top-bottom">
                                <div className="reviews-icons">
                                    {/* <PiQuotesThin />
                                    <PiQuotesThin /> */}
                                     <SiPowerautomate className='reviews-icon'/>
                                    <SiPowerautomate className='reviews-icon'/>
                                </div>
                                <p>
                                    خدمات قانونية على أعلى مستوى تدعم عالم المال والأعمال، والأفضل من ذلك خبرة المحامين وسرعة الأداء والرد. شكراً جزيلاً على هذا الخبرات اللامعة
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="reviews-bottom">
                            <div className="reviews-bottom-top">
                                <div className="reviews-icons">
                                    {/* <PiQuotesThin />
                                    <PiQuotesThin /> */}
                                     <SiPowerautomate className='reviews-icon'/>
                                    <SiPowerautomate className='reviews-icon'/>
                                </div>
                                <p>
                                    دقة عالية وسرعة في الإداء وتعامل راقي مع محامو المكتب. بدعمهم تتحقق الأهداف وتحل المشكلات القانونية، شكراً لكم
                                </p>
                            </div>
                            <div className="reviews-header">
                                <div>
                                    <h4>أستاذ هيثم الشيمي</h4>
                                    <span>مدير ماليات</span>
                                </div>
                                <img src={reviewImg3} alt="reviews" />
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="reviews-top">
                            <div className="reviews-header">
                                <div>
                                    <h4>المهندس حسام نصار</h4>
                                    <span>مهندس إماراتي خبير</span>
                                </div>
                                <img src={reviewImg4} alt="reviews" />
                            </div>
                            <div className="reviews-top-bottom">
                                <div className="reviews-icons">
                                    {/* <PiQuotesThin />
                                    <PiQuotesThin /> */}
                                     <SiPowerautomate className='reviews-icon'/>
                                    <SiPowerautomate className='reviews-icon'/>
                                </div>
                                <p>جهود إستثنائية في دعم الموكلين والعمل على خطاهم. سعيد بتعاملي مع المجموعة التجارية والبحرية وممتن لما قدموه لي من خدمات</p>
                            </div>
                        </div>
                    </Col>

                </Row>
                <div className="content-Link">
                        <a href="#">مشاهدة كامل الأراء<FaArrowLeft className='arrow-icon' /></a>
                        </div>


            </Container>
            <Col xs={12}>
            <div className="reviews-rate">
                <Row className='reviews-rate-container'>
                    <Col xs={12} md={6} lg={3}>
                        <div className="number">
                            <h2>{valuesOne}</h2>
                            <h4>{data[0].title}</h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="number custom-number">
                            <h2>{valuesTwo}+</h2>
                            <h4>{data[2].title}</h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="number">
                            <h2>{valuesThree}</h2>
                            <h4>{data[0].title}</h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <div className="number last-number">
                            <h2>{valuesFour}+</h2>
                            <h4>{data[3].title}</h4>
                        </div>
                    </Col>

                </Row>
            </div>
            </Col>
          


        </section>
    )
}

export default Reviews