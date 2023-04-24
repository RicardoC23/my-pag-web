import './Contact.css'
import { FaLinkedinIn, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Contact() { 
return (
    <div className='container-form'>
        <div className='container-redes'>
                <div className='container-redes-tex'>
                    <h1>contac.</h1>
                    <p>Get in touch with me via social media or email.</p>
                </div>
                <div className='container-redes'>
                    <ul className='container-redes-contact'>
                        <li className='linkedln'><a href="linkidin.com"><FaLinkedinIn/><p>Linkedln</p></a></li>
                        <li className='facebook'><a href="facebook.com">< FaFacebook/><p>Facebook</p></a></li>
                        <li className='instagram'><a href="Instagram.com"><FaInstagram/><p>Intagram</p></a></li>
                        <li className='twitter'><a href="Twitter.com"><FaTwitter/><p>Twitter</p></a></li>
                    </ul>
                </div>
        </div>
        <form className='Container-contact'>
            <div className='container-form-text'>
                <h1>Send me an Email</h1>
            </div>   
            <div className='container-contact-message'>
                <div className='container-input'>
                    <input type="text" placeholder='Your Full Name' className='form-input'/>
                    <input type="text" placeholder='Your Email' className='form-input' />
                    <textarea name="Your Message" placeholder='Your Message' className='form-text'></textarea>
                    <button className='button-send'>Send Message</button>
                </div>
            </div>
        </form>
    </div>
)

}


export { Contact }