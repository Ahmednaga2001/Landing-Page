
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowLeft } from 'react-icons/fa';
import serviceOneImg1 from '../assets/serviceOne.png';
import serviceOneImg2 from "../assets/servicetwo.png"
import serviceOneImg3 from "../assets/servicethree.jpeg"
import serviceOneImg4 from "../assets/servicefour.png"
import { useState } from 'react';

export default function ServiceOne() {
    const [serviceInfo] = useState([
        {
            id : 1,
            title : 'تأسيس الشركات',
            desc : 'هل ترغب في تأسيس شركة في مصر؟ نعمل على تقديم الدعم لأعمال الشركات المختلفة بمستوى مميز من الأداء. حيث نقدم الدعم في تأسيس الشركات في مصر والسعودية والإمارات بمختلف أنواعها، وإعداد عقود التأسيس واللوائح الداخلة، بالإضافة إلى مساعدة العملاء على اختيار نوع الشركة، وتوفير الدعم في كافة مراحل التأسيس والإعداد.',
            img : serviceOneImg1

        },
        {
            id : 2,
            title : 'الاستشارات القانونية',
            desc : 'نفخر بتقديم الاستشارات القانونية  من مستشار قانوني مُحنك مع دعم من أكبر محامين مصر المتخصصين في مجالات القانون المختلفة والمستعدين لتقديم المشورة والرأي القانوني حول القضايا المختلفة للأفراد والشركات مع تقديم أفضل الحلول الموثوقة لمشكلاتهم القانونية وهذه الخدمة لكل من يبحث عن رقم محامي للاستشارة.',
            img : serviceOneImg2
        },
        {
            id : 3,
            title : 'استثمر في مصر',
            desc : 'الاستثمار في مصر يعد فرصة مثيرة بفضل موقعها الاستراتيجي، واقتصادها المتنامي، وجهودها في تحسين بيئة الاستثمار. تقدم الحكومة دعمًا وتسهيلات للمستثمرين، والسوق المصري يوفر فرصًا متنوعة وواسعة للعملاء المحتملين.',
            img : serviceOneImg3
        },
        {
            id : 4,
            title : 'توكيل محامي',
            desc : 'توكيل المحامي هو اتفاق قانوني يمنح شخصًا آخر صلاحية تمثيلك أو تنفيذ الإجراءات القانونية نيابة عنك. يعتمد على الثقة والثقة المتبادلة ويتضمن توثيقًا رسميًا لتحديد نطاق الصلاحيات الممنوحة.',
            img : serviceOneImg4
        }
    ])
  return (
    <section className='service'>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <div className="service-right">
              <h2>خدمات قانونية عالمية المستوى منذ 1986</h2>
              <p>ينفرد مكتب محامي مصر الأول بتقديم أكثر من 30 خدمة قانونية بخبرات عالمية وفهم واسع للبيئة القانونية. لتقديم أفضل مستوى من الحلول القانونية على الصعيد المحلي والدولي في مكتبنا بقلب مدينة القاهرة. فمن خلال دمج خبرات فريق العمل المكون من أكثر من 40 محامي متخصصين في مجالات القانون المختلفة، تكمن قوتنا في تقديم خدمات قانونية بمعايير أداء عالمية ومستوى فاعلية ممتاز في الجودة والوقت.</p>
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
                        <h4>{service.title}</h4>
                        <p>{service.desc}</p>
                        
                        <div className="content-Link">
                        <a href="#">الذهاب الي الصفحة<FaArrowLeft className='arrow-icon' /></a>
                        </div>
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
