import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"
import './Hero.css'

    function Hero() {
    
    return (
    <div className='container-hero'>        
        <div className='container-hero-text'>
            <h1>website innovation</h1>
        </div>
        <div className='info-container'>
            <h2> Junior Frontend Developer</h2>
            <h3>Transform design into an exceptional experience.</h3>
            <div className="container-datos">
                <div className="datos-from">
                    <h4>Perú-Arequipa</h4>
                    <h4>Arequia-Santa Rita</h4>
                </div>
                <div className="datos-contact">
                    <a href="correo">ricardomamani403@gmail.com</a>
                    <h4>+51 940540123</h4>
                </div>
            </div>
            <div className='container-redes'>
                    <div>
                        <a href="facebook.com">< FaFacebook/></a>
                    </div>
                    <div>
                        <a href="twiter.com"><FaTwitter/></a>
                    </div>
                    <div>
                        <a href="Instagram.com"><FaInstagram/></a>
                    </div>
            </div>
        </div>
    </div>
    )
}

export { Hero }