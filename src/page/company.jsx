import Container from 'react-bootstrap/Container';
import companyImg1 from "../assets/company1.png"
import companyImg2 from "../assets/company2.png"
import companyImg3 from "../assets/company3.png"
import companyImg4 from "../assets/company4.png"
import companyImg5 from "../assets/company5.png"
import companyImg6 from "../assets/company6.png"
import companyImg7 from "../assets/company7.png"

function Company() {
  return (
    <section className='company'>
        <Container>               
                <div className='parent'>
                    <div>
                    <img src={companyImg1} alt="" />

                    </div>
                    <div>
                    <img src={companyImg2} alt="" />

                    </div>
                    <div>
                    <img src={companyImg3} alt="" />

                    </div>
                    <div>
                    <img src={companyImg4} alt="" />

                    </div>
                    <div>
                    <img src={companyImg5} alt="" />

                    </div>
                    <div>
                    <img src={companyImg6} alt="" />

                    </div>
                    <div>
                    <img src={companyImg7} alt="" />

                    </div>


                </div>
                
        </Container>

    </section>
  )
}

export default Company