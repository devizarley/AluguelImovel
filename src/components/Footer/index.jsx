import Logo from './img/logo_presson_white-AMqqXN22XxI2Oz6Z.svg'
import {BsFacebook, BsTwitter, BsInstagram} from "react-icons/bs"
import './index.css'


function Footer () {
    return (
        <footer className='Footer'>
            <div className="containerFooter">
                <div className="footerLeft">
                    <img src={Logo} alt="" />
                </div>
                <div className="footerRight">
                    <div className="footerRight01">
                        <div className="footerRightTop">
                            <h1><strong>Contacts</strong></h1>
                            <p>123-456-7890</p>
                            <p>email@example.com</p>
                        </div>
                        <div className="footerRightbottom">
                            <BsTwitter className='iconsFooter'/>
                            <BsFacebook className='iconsFooter'/>
                            <BsInstagram className='iconsFooter'/>
                        </div>
                    </div>
                    <div className="footerRight02">
                        <div className="footerRightTop">
                            <h1><strong>ADDRESS</strong></h1>
                            <p>123 your street name,</p>
                            <p>City name, Country, post code</p>
                        </div>
                        <div className="footerRightbottom">
                            <p>Powered by Zyro.com</p>    
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer