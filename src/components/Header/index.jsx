import './index.css'
import logo from './img/logo.svg'
import {
    AiFillCaretDown,
}from "react-icons/ai"

function Header () {
    return (
        <header>
            <div className="containerHeader">
                <div className='headerLeft'>
                    <img src={logo} alt="" />
                </div>
                <div className='headerRight'>
                    <ul>
                        <li><a href="google.com">About us</a></li>
                        <li><a href="google.com">Projects</a><AiFillCaretDown/></li>
                        <li><a href="google.com">Press</a></li>
                        <li><a href="google.com">Partners</a></li>
                        <li><a href="google.com">Contact</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header