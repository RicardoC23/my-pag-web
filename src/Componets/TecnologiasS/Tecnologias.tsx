import './Tecnologias.css'

function Tecnologias() {
    return (
    <div className='tech'>
        <div className='container-tech'>
            <h2 className='container-tech-text' id='Tecnologias'>
                Tech-Skills
            </h2>
            <div className='container-tech-skill'>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/github.svg'}/>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/html.png'}/>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/css.svg.png'}/>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/js.png'}/>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/typescript-2.svg'}/>
                </div>
                <div>
                    <img className="nav-img-tech"src = {'../Pictures/react.png'}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export { Tecnologias } 