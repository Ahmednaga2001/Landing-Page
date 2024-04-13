
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import serviceTwoImg1 from "../assets/servicefive.png"
import serviceTwoImg2 from "../assets/servicesix.png"
import serviceTwoImg3 from "../assets/serviceseven.jpeg"
import serviceTwoImg4 from "../assets/serviceeight.jpeg"
import serviceTwoImg5 from "../assets/servicenine.png"
export default function ServiceTwo() {
    const [serviceInfo] = useState([
       {
        id : 1,
        title : 'القضايا العقارية',
        desc : 'تقدم المجموعة التجارية والبحرية خدمات قانونية رائدة حول المشكلات القانونية المتعلقة بالعقارات مثل قضايا التعويضات والحيازات العقارية وغيرها. سنقوم بدعمك بأفضل محامي عقارات بمكتبنا ليتولى قضيتك ويحقق أهدافك القانونية في القضايا العقارية وفي مجال التطوير العقاري داخل وخارج مصر.',
        img : serviceTwoImg1
       },
       {
        id : 2,
        title : 'القضايا المدنية',
        desc : 'لدى مكتبنا محامون متخصصون في القضايا المدنية مستعدون لتولي كافة أنواع القضايا الناشئة عن العقود والمعاملات المدنية مع تقديم الدعم الكافي من المرافعة والدفاع أمام المحاكم لنصرة موكلينا. فمن خلال التعاقد معنا، سيتولى أشهر محامي مدني في مكتبنا قضيتك ويحقق لك النصر من خلال خبراته ومعارفه.',
        img : serviceTwoImg2
       },
       {
        id : 3,
        title : 'القضايا الدولية',
        desc : 'نقدم الدعم الكافي من الدراسات والاستشارات لجميع عملائنا المحليين والدوليين في التقاضي عبر المحاكم الدولية. فمن خلال الخبرة في القانون الدولي، سندعمك بمحامي دولي متمرس مستعد لتولي قضاياك الدولية والعمل على تحقيق غاياتك في التحكيم التجاري الدولي.',
        img : serviceTwoImg3
       },
       {
        id : 4,
        title : 'القضايا التجارية',
        desc : 'تتطلب القضايا التجارية إلى محامين أصحاب معارف وخبرات طويلة، لذا يعد توكيل محامي تجاري من القرارات المهمة لضمان حقوق الموكل. ومع خبرة تفوق الـ 30 عامًا في القضايا التجارية، نضمن لك النصرة في هذا النوع من القضايا والذي يساعدك على تحقيق أهدافك التجارية.',
        img : serviceTwoImg4
       },
       {
        id : 5,
        title : 'القضايا الجنائية',
        desc : 'هل تبحث عن محامي جنائي يقوم بالدفاع والمرافعة أمام المحاكم الجنائية متعهدًا على نصرتك؟ مع المجموعة التجارية والبحرية سندعمك بأفضل محامي جنايات يتولى أمر القضايا الجنائية ويقوم بحضور التحقيقات أمام النيابة العامة ويركز جهده وخبرته على تحقيق النصر في قضيتك. ',
        img : serviceTwoImg5

       }
       
       
    ])
  return (
    <section className='service service-two' style={{backgroundColor : 'var(--main-color)'}}>
      <div className='service-two-overlay'></div>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="service-right">
                <h2>محامين خبراء في مجالات القانون والقضايا المختلفة</h2>
                <p>ما يميز مكتبنا عن مكاتب المحاماة الأخرى، هو انفرادنا بالتخصصات القانونية التي تتطلب خبرة قانونية وفكر استراتيجي من الدرجة الأولى. حيث نفخر بوجود شركائنا المتخصصين في مجالات القانون المختلفة، والمستعدون لدعم عملائنا الكرام بكل السبل الممكنة لتحقيق أهدافهم بأسرع وقت وبأعلى جودة ممكنة؛ سعياً منا لنصبح أفضل شركة محاماة في مصر في المستقبل القريب.</p>
        
              <div className="content-Link">
                <a href="#"> اطلب الان استشارة فورية<FaArrowLeft className='arrow-icon' /></a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <div className="service-left">
              <div className="scrolling-container">
                  {
                    serviceInfo.map((service)=>(
                        <div className="scrolling-content mb-2" key={service.id}>
                        <img src={service.img} alt={service.title} />
                        <h4 style={{color : 'var(--sec-color)'}}>{service.title}</h4>
                        <p>{service.desc}</p>
                        
                
                      </div>
                    ))
                  }
                </div>
               
            
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
