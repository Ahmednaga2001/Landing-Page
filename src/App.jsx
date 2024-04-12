
import './App.css'
import NavBar from "../src/component/navBar";
import Home from './page/home';
import Cursoul from './page/cursoul';
import Advantages from './page/advantages';
import ServiceOne from './page/serviceOne';
import ServiceTwo from './page/serviceTwo';
import Team from "./page/team"
import Reviews from './page/reviews';
import Contact from './page/contact';
import Company from './page/company';
import ServiceThree from './page/serviceThree';
import Slider from './page/slider';
import Footer from './component/footer';
function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <Cursoul/>
      <Advantages/>
      <ServiceOne/>
      <ServiceTwo/>
      <Team/>
      <Reviews/>
      <Contact/>
      <Company/>
      <ServiceThree/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
