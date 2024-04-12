
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import serviceTreeImg1 from "../assets/serviceten.jpeg"
import serviceThreeImg2 from "../assets/serviceeleven.jpeg"
import serviceThreeImg3 from "../assets/servicetwelve.jpeg"
import serviceThreeImg4 from "../assets/servicethirteen.jpeg"
export default function ServiceThree() {
    const [serviceInfo] = useState([
       {
        id : 1,
        title : 'محامي في مصر',
        desc : 'على مر السنين وقد تم الاعتراف بالمحامي المصري كونه أحد أجدر رجال القانون في تولي المسائل القانونية, فقد عُرِف بعقليته الاستراتيجية العالية وامتلاكه المقدرة الفائقة في إدارة الأزمات وفض المنازعات المحلية والدولية في كثير من بلاد الوطن العربي في شتى فروع القانون.',
        date : '28 يناير   . 9 دقائق',
        img : serviceTreeImg1
       },
       {
        id : 2,
        title : 'تأسيس شركة في السعودية',
        desc : 'هي خطوة جوهرية للعديد من رواد الأعمال والمستثمرين الراغبين في استغلال الفرص الاقتصادية المتاحة في البلاد، حيث تعد المملكة العربية السعودية واحدة من أكبر الاقتصادات في الشرق الأوسط وتتمتع ببيئة استثمارية مشجعة ومتطورة.',
        img : serviceThreeImg2
       },
       {
        id : 3,
        title : 'تسجيل العلامة التجارية',
        desc : 'يمثل أحد أهم الإجراءات القانونية المهمة لأي فرد أو شركة ترغب في حماية هويتها التجارية وحقوقها الفكرية، حيث يضمن القانون حقوق الملكية الفكرية للشركات والأفراد في استخدام أسماء تجارية، شعارات تجارية وتصاميم المنتجات الخاصة بهم وذلك من خلال الاستعانة بمحامي علامات تجارية محترف.',
        img : serviceThreeImg3
       },
       {
        id : 4,
        title : 'حماية الملكية الفكرية',
        desc : 'تعد أحد أفرع الملكية حيث لا تقتصر على كونها ملكية مادية فقط خاصة بالعقارات، ويندرج تحتها براءات الاختراع وحقوق النشر والعلامات التجارية؛ لذا وقد باتت الحاجة تتطلب توكيل المحامي المختص بحماية الملكية الفكرية.',
        img : serviceThreeImg4
       }
       
       
    ])
  return (
    <section className='service service-three' style={{backgroundColor : 'var(--main-color)'}}>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="service-right">
                <h2>أحدث المقالات</h2>
                <p>تعلم أكثر من المكتبة القانونية المتكاملة وامتلك معرفة أوسع وأعمق في البيئة القانونية من خلال استكشاف أحدث التطورات والمستجدات، واستفد من مجموعة متنوعة من المصادر القانونية المتكاملة.</p>
        
              <div className="content-Link">
                <a href="#">أقراء المزيد<FaArrowLeft className='arrow-icon' /></a>
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
                        <ul>
                            <li>28 يناير   . 9 دقائق</li>
                        </ul>
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
