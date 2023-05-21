import './Footer.css'
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
    return (
        <footer className='container-footer'>
            <div>
                
                <ul className='container-follow'>
                    <li className='linkedln'><a href="linkidin.com"><FaLinkedinIn/></a></li>
                    <li className='facebook'><a href="facebook.com">< FaFacebook/></a></li>
                    <li className='instagram'><a href="Instagram.com"><FaInstagram/></a></li>
                    <li className='twitter'><a href="Twitter.com"><FaTwitter/></a></li>
                </ul>
                <span>&copy;2023,RicardoDeveloper. All rights reserved.</span>
            </div>
        </footer>
    )
}


export { Footer }