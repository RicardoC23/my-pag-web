import { FaTwitter, FaLinkedinIn, FaGithub, FaAlignJustify } from "react-icons/fa";
import { useState } from 'react';
import "./header.css"

function Header():JSX.Element {
    const [ menu, setMenu] = useState<boolean>(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }
    
    return (
            <header className="Conatiner-header">
                <img className="nav-img"src = {'../Pictures/rsv-logo.png'}/>
                <button onClick={ toggleMenu }
                className="container-button"><FaAlignJustify className="barra-contenido"/> </button>
                <nav className= {`container-nav ${ menu ? 'isActive' : ''}`} >
                    <ul className="container-ul">
                        <li><a href="#Tecnologias">Skills</a></li>
                        <li><a href="#Portfolio">Portfolio</a></li>
                        <li><a href="#About-me">About me</a></li>
                        <li><a href="#Contact">Contact</a></li>
                        <div className="container-red">
                            <li><a href="linkidin.com"><FaLinkedinIn className="icon-social"/></a></li>
                            <li><a href="facebook.com"><FaGithub className="icon-social"/></a></li>
                            <li><a href="twiter.com"><FaTwitter className="icon-social"/></a></li>
                        </div>
                    </ul>
                </nav>
            </header>
    );
};

export { Header }
