

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
                        <button>HOME</button>
                        <button>ABOUT ME</button>
                        <button>BLOG</button>
                        <button>MY PASSION</button>
                        <button>CONTACT</button>
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
