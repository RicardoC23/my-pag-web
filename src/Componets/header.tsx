
function Header() {
    return (
        <div className="container-header">
            <header>
                <div className="logo-title">
                    <img
                    src = {'../Pictures/logoRicardo.jpg'}
                    />
                    <h4>WEB DEVELOPER - FULL STACK</h4>
                    <div>
                        <ul>
                            <li><a href="Home">HOME</a></li>
                            <li><a href="Aboute.me">ABOUTE ME</a></li>
                            <li><a href="Blog">BLOG</a></li>
                            <li><a href="My-Passion">MY PASSION</a></li>
                            <li><a href="Contact">CONTACT</a></li>
                        </ul>
                    </div>
                    <div>
                        <select >
                            <option>Español</option>
                            <option>English</option>
                        </select>
                    </div>
                </div>
            </header>
        </div>
    );
};

export { Header }
