import './Footer.css'
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa"

function Footer() {
    return (
        <footer className='container-footer'>
            <div className='footer-text'>
                <span>Call me:</span>
                <p>+51 940540123</p>
            </div>
            <div className='footer-text'>
                <span>Find me:</span>
                <p>Perú-Arequipa</p>
            </div>
            <div className='copyright-content'>
                <p>Copyright © 2023 by Ricardo. </p>
            </div>
            <div className='container-whatsapp'>
                    <a href="whatsapp" className='whatsapp'><FaWhatsapp/></a>
            </div>
        </footer>
    )
}


export { Footer }