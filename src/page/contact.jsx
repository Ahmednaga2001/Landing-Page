import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft } from 'react-icons/fa';
import logo from "../assets/Logo.png"
function Contact() {
  return (
    <section className='contact'>
        <Container>
            <Row>
                <Col xs={12} md={12} lg={6}>
                   <form action="">
                   <Row>
                            <Col xs={12} md={6}>
                                <input type="text" placeholder='الأسم*' name="" id="" />
                            </Col>
                            <Col xs={12} md={6}>
                                <input type="text" name="" placeholder='البريد الإلكتروني*' id="" />
                            </Col>
                            <Col xs={12}>
                                <textarea name="" placeholder='اكتب رسالتك هنا...' id=""></textarea>
                            </Col>
                            <Col xs={12}>
                            <div className="content-Link">
                           <a href="#">ارسال الرسالة<FaArrowLeft className='arrow-icon' /></a>
                           </div>                            </Col>
                        
                    </Row>
                   </form>
                </Col>
                <Col xs={12} md={12} lg={6}>
                    <img src={logo} alt="logo" />
                </Col>

            </Row>
        </Container>


    </section>
  )
}

export default Contact