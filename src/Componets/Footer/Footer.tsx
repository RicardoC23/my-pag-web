import React from 'react'
import { FaFacebook, FaTwitter, FaGithub, FaInstagram, FaEnvelope, FaMobileAlt} from "react-icons/fa"

function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <div><a href="facebook.com">< FaFacebook/></a></div>
                    <div><a href="twiter.com"><FaTwitter/></a></div>
                    <div><a href="Github.com"><FaGithub/></a></div>
                    <div><a href="Instagram.com"><FaInstagram/></a></div>
                </div>
                <div>
                    <ul>
                        <li><FaMobileAlt/><p> +51 940540123</p></li>
                        <li><FaEnvelope/><p>ricardo.mamani403@gamil.com</p></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


export { Footer }