import "./header.css"

function Header() {
    return (
            <header className="header-container">
                <div className="container-nav">
                    <div>
                        <h4>WEB DEVELOPER - FULL STACK</h4>
                    </div>
                    <div>
                        <img className="nav-img"src = {'../Pictures/Dragon.svg.png'}/>
                    </div>
                    <div className="containe-option">
                        <ul className="container-ul">
                            <li><a href="Home">HOME</a></li>
                            <li><a href="Aboute.me">ABOUTE ME</a></li>
                            <li><a href="Blog">BLOG</a></li>
                            <li><a href="Contact">CONTACT</a></li>
                        </ul>
                        <div className="Select-container">
                            <select className="select-language">
                                <option>Español</option>
                                <option>English</option>
                            </select>
                        </div>
                    </div>
                </div>
            </header>
    );
};

export { Header }
