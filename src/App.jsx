/* COMPONENTES */
import './App.css'
import Header from './components/Header/index.jsx'
import Offfer from './components/Offfer/index.jsx'
import OurProjects from './components/OurProjects/index.jsx'
import Feedback from './components/Feedback/index.jsx'
import Process from './components/Process/index.jsx'
import Team from './components/Team/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'

/* IMAGENS/ICONES */
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import ImgHome from './assets/img/imgHome.png'
import DashSvg from './assets/img/dash.svg'
import DashSvgWhite from './assets/img/dashWhite.svg'
import StarSvg from './assets/img/star.svg'
import Img03 from './assets/img/img03.png'
import imgRight01 from './assets/img/imgRight01.webp'
import imgRight02 from './assets/img/imgRight02.webp'
import imgRight03 from './assets/img/imgRight03.webp'
import imgPart01 from './assets/img/imgpart01.svg'
import imgPart02 from './assets/img/imgpart02.svg'
import imgPart03 from './assets/img/imgpart03.svg'

function App() {
  return (
    <body className="webApp">
      <Header/>
      <article>
        <section className='section01'>
          <div className='containerSection01'>
            <div className='sectionLeft'>
              <h2>TIME TO MEET YOUR</h2>
              <h1>NEW HOME</h1>
              <img src={DashSvg} alt=""/>
              <p>
                Finding the perfect place to call home can be hard. 
                Our team of creatives and specialists makes real estate easy.
              </p>
            </div>
            <div className='sectionRight'>
              <div className='rightTop'>
                <img src={ImgHome} alt="" />
                <img src={StarSvg} alt="" className='starSvg'/>
              </div>
              <div className='rightBottom'>
                <BsTwitter className='twitter'/>
                <BsFacebook className='facebook'/>
                <BsInstagram className='instagram'/>
              </div>
            </div>
          </div>
        </section>
        <Offfer className='section02'/>
        <section className='section03'>
          <div className="containerSection03">
            <header>
              <div className="header03Left">
                <h2>LATEST PROJECT</h2>
              </div>
              <div className="header03Right">
                <img src={StarSvg} alt="" />
                <p>
                Presson team is constantly striving for perfection. We are lucky to work with notable and known clients, who trust us and let us guide them with our creative vision, making their real estate dreams true.
                </p>
              </div>
            </header>
            <main>
              <div className="main03Left">
                <img src={Img03} alt="" />
              </div>
              <div className="main03Right">
                <img src={imgRight01} alt="" />
                <img src={imgRight02} alt="" />
                <img src={imgRight03} alt="" />
              </div>
            </main>
            <footer>
              <div className="footer03Left">
                <div className="footerLeftTop">
                  <h3>SUNSHINE BAY RESIDENCE</h3>
                  <p>3 BEDROOM HOUSES IN BEAUTIFUL SUBURBS</p>
                </div>
                <div className="footerLeftBottom">
                  <h4>$2.000.000</h4>
                </div>
                
                
              </div>
              <div className="footer03Right">
                <p>Equipped with air conditioning, private pool, 3 on-suite bedrooms and a spacious open living room kitchen area, Sunshine Bay Residences are an excellent choice for anyone dreaming of their own safe haven. Located in a peaceful, child-friendly neighborhood, Sunshine Bay has all the amenities that you could expect from a suburb voted 'best in the state' for 3 running years. Whether you want to play soccer with your kids on the lawn, or invite friends over for dinner, there's space for it at Sunshine Bay.</p>
                <button>LEARN MORE</button>
              </div>
            </footer> 
          </div>
        </section>
        <OurProjects className='section04'/>
        <Feedback className='section05'/>
        <Process className='section06'/>
        <Team className='section07'/>
        <section className='section08'>
          <div className="containerSection08">
            <div className="section08Left">
              <div className="left08Top">
                <h1>PARTNERS</h1>
                <p>To bring our vision into reality, we need the best partners out there. We've joined hands with one of the best when it comes to materials, lightning and furniture to achieve sophisticated results. </p>
              </div>
              <div className="left08Bottom">
                <img src={DashSvgWhite} alt="" />
              </div>
            </div>
            <div className="section08Right">
              <img src={imgPart01} alt="" className='right08Top'/>
              <img src={imgPart02} alt="" />
              <img src={imgPart03} alt="" />
            </div>
          </div>
        </section>
        <Contact className='Section09'/>
      </article>
      <Footer/>
    </body>
  );
}

export default App;
