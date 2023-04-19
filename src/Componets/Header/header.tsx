import { FaTwitter, FaLinkedinIn, FaGithub, FaAlignJustify } from "react-icons/fa";
import "./header.css"

function Header():JSX.Element {
    return (
            <header className="header-container">
                <div className="container-nav">
                    <div>
                        <img className="nav-img"src = {'../Pictures/rsv-logo.png'}/>
                    </div>
                    <div className="containe-option"> <FaAlignJustify className="barra-contenido"/> 
                        <ul className="container-ul">
                            <li><a href="Home">About me</a></li>
                            <li><a href="Aboute">Skills</a></li>
                            <li><a href="Blog">Portfolio</a></li>
                            <li><a href="Contact">Contact</a></li>
                        </ul>
                        <div className="redes-container">
                            <div className="container-social">
                                <div><a href="linkidin.com"><FaLinkedinIn/></a></div>
                                <div><a href="facebook.com"><FaGithub/></a></div>
                                <div><a href="twiter.com"><FaTwitter/></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export { Header }
