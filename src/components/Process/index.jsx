import './index.css'
import DashSvg from './img/dash.svg'

function Process () {
    return (
        <section className="section06">
            <div className="containerSection06">
                <div className="section06Left">
                    <h1>PROCESS OF BUYING</h1>
                    <img src={DashSvg} alt="" />
                </div>
                <div className="section06Right">
                    <div className="section06Topic">
                        <div className="topicLeft">
                            <h6>1</h6>
                        </div>
                        <div className="topicRight">
                            <h3>HOUSE VIEWING</h3>
                            <p>We are here to help you find the perfect place for your family. Depending on your needs, we'll suggest properties to view and book you in for your viewing.</p>
                        </div>
                    </div>
                    <div className="section06Topic">
                        <div className="topicLeft">
                            <h6>2</h6>
                        </div>
                        <div className="topicRight">
                            <h3>NEGOTIATING TERMS</h3>
                            <p>Once you've found the property of your dreams and are ready to place an offer, we will contact the seller and negotiate the best terms to suit your budget and needs. </p>
                        </div>
                    </div>
                    <div className="section06Topic">
                        <div className="topicLeft">
                            <h6>3</h6>
                        </div>
                        <div className="topicRight">
                            <h3>CLOSE CARE-FREE</h3>
                            <p>We don't play around – that means that our bold and confident approach to closing results in you walking away with the keys to your new dream property. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Process