import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSearch } from "react-icons/fa";
import logo from "../assets/Logo.png";

export default function NavBar() {
  return (
    <section className='nav fixed-top'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={12} lg={4} className='search-content'>
             <form action="">
             <button className='search-custom'><FaSearch className='search-icon'/></button>
             <input type="text" placeholder='كيف يمكننى مساعدتك' />
             </form>
          </Col>
          <Col xs={6} md={6} lg={4} className='details'>
            <span>فروعنا</span>
            <span>AR</span>
          </Col>
          <Col xs={6} md={6} lg={4} className='brand'>
            <a href="#"><img className='logo' src={logo} alt="logo" /></a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
