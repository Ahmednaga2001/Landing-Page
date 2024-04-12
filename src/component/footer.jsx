import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { CiFacebook } from 'react-icons/ci';

const Footer = () => {
    return (
        <section className='footer'>
            <Container>
                <Row>
                    <Col xs={12} md={6} className=''>
                        <div className="footer-heading-one">
                            <h2>أسأل محامي<FaArrowLeft style={{ marginRight: '20px' }} /></h2>

                        </div>

                    </Col>

                    <Col xs={12} md={6}>
                        <div className="footer-heading-two">
                            <h2 style={{ textAlign: 'center' }}>انضم إلينا<FaArrowLeft style={{ marginRight: '20px' }} /></h2>
                        </div>

                    </Col>
                    <div className='footer-two'>
                        <Col>
                            <Row>
                                <Col xs={12} md={12} lg={4}>
                                    <div className="footer-info-right">
                                        <h3>أخبار ورؤي</h3>
                                        <h3>تواصلوا معنا</h3>
                                        <h3>الخدمات القانونية</h3>
                                        <h3>الأستشارات القانونية</h3>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={4}>
                                    <div className="footer-icons">
                                        <TiSocialLinkedinCircular className='icon' />
                                        <TiSocialTwitterCircular className='icon' />
                                        <CiFacebook className='icon' />
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={4}>
                                    <div className="footer-info-left">
                                        <h3>فريق العمل</h3>
                                        <h3>لماذا تختارنا</h3>
                                        <h3>اراء العملاء</h3>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <div className="text-one">
                    <Col >
                        <Row>
                            <Col xs={12} md={4} lg={4}>
                                <h4>الإشعارات القانونية</h4>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <h4>سياسة الخصوصية</h4>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <h4>خريطة الموقع</h4>
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className="text-two">
                    <p> هو اكبر مكتب محاماة في الشرق الاوسط يعمل من خلال كيانات قانونية منفصلة ومتميزة مختلفة.
                        جميع حقوق النسخ والنشر محفوظة ©2024 المجموعة التجارية والبحرية للمحاماة</p>
                </div>

            </Container>

        </section>
    );
}

export default Footer;
