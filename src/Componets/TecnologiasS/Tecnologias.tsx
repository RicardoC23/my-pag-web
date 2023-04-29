import './Tecnologias.css'

function Tecnologias() {
    return (
    <div className='tech'>
        <div className='container-tech'>
            <h2 className='container-tech-text'>
                Tech-Skills
            </h2>
            <div className='container-tech-skill'>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/github.svg'}/>
                    <p>
                    GitHub
                    </p>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/html.png'}/>
                    <p>
                    HyperText Markup Language
                    </p>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/css.svg.png'}/>
                    <p>
                    Cascading Style Sheets
                    </p>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/js.png'}/>
                    <p>
                    JavaScript
                    </p>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/typescript-2.svg'}/>
                    <p>
                    TypeScript
                    </p>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/react.png'}/>
                    <p>
                    ReactJS
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export { Tecnologias } 