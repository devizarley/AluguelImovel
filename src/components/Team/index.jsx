import './index.css'

import Team01 from './img/team01.png'
import Team02 from './img/team02.png'
import Team03 from './img/team03.png'
import Team04 from './img/team04.png'
import DashSvg from './img/dash.svg'

function Team () {
    return (
        <section className="section07">
            <div className="containerSection07">
                <div className="section07Left">
                    <div className="containerTopBottom">
                        <div className="left07Top">
                            <h1>MEET OUR TEAM</h1>
                            <p>A COLLECTIVE, THAT MAKES DREAMS COME TRUE</p>
                        </div>
                        <div className="left07Bottom">
                            <p>Our strength lies in our individuality. Set up by Esther Bryce, Presson's team strives to bring in the best talent in various fields, from architecture to interior design and sales. </p>
                        </div>
                    </div>
                    <div className="left07Footer">
                        <img src={DashSvg} alt="" />
                    </div>
                </div>
                <div className="section07Right">
                    <div className="right07Card top left">
                        <img src={Team01} alt="" />
                        <h3>ESTHER BRYCE</h3>
                        <p>Founder • Interior designer</p>
                    </div>
                    <div className="right07Card top right">
                        <img src={Team02} alt="" />
                        <h3>LIANNE WILSON</h3>
                        <p>Broker</p>
                    </div>
                    <div className="right07Card bottom left">
                        <img src={Team03} alt="" />
                        <h3>JADEN SMITH</h3>
                        <p>Architect</p>
                    </div>
                    <div className="right07Card bottom right">
                        <img src={Team04} alt="" />
                        <h3>JESSICA KIM</h3>
                        <p>Photographer</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team