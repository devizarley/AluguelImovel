import './index.css'
import DashSvg from './img/dash.svg'

function Contact () {
    return (
        <section className="section09">
            <div className="containerSection09">
                <div className="section09Left">
                    <div className="left09Top">
                        <h1>CONTACT US</h1>
                        <p>If you're interested in hearing more about the way we work, have a business proposal, or are interested in making a purchase, we'd love to hear from you.</p>
                    </div>
                    <div className="left09Bottom">
                        <img src={DashSvg} alt="" />
                    </div>
                </div>
                <div className="section09Right">
                    <form action="">
                        <label>Name*</label>
                        <div className="input A">
                            <input type="text" placeholder='Your name'/>
                        </div>
                        <label>Last name</label>
                        <div className="input A">
                            <input type="text" placeholder='Your last name'/>
                        </div>
                        <label>Your email*</label>
                        <div className="input A">
                            <input type="text" placeholder='Your email address'/>
                        </div>
                        <label>Message*</label>
                        <div className="input M">
                            <textarea type="text" placeholder='Enter your message'/>
                        </div>
                        <div className="button footer03Right">
                            <button>SUBMIT</button> 
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact