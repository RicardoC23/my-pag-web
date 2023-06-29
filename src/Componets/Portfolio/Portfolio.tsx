import './Portfolio.css'

function Portfolio() {
    return (
    <div className='portfolio'>
        <div className='container-portfolio'>
            <div className='container-title'>
                <h3 id='Portfolio'>Portfolio</h3>
                <p>My Recient Project</p>
            </div>
            <div className='container-project'>
                <div className='container-project-git'>
                    <div className='container-Netflix'>
                        <img src = {'../Pictures/netflix.png'} className='img-project'/>
                        <p>netflix-replication</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-todo'>
                        <img src = {'../Pictures/TODO-app.jpg'} className='img-project'/>
                        <p>TODO-List-React</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-pokedex'>
                        <img src = {'../Pictures/POKEDEX.png'} className='img-project'/>
                        <p>Pokedex-React</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/controller.png'} className='img-project'/>
                        <p>PS4-Pag-Responsive</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/carrito-shop.png'} className='img-project'/>
                        <p>Shopping Cart</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/Form-1.jpg'} className='img-project'/>
                        <p>Form-React</p>
                        <div className='container-botton'>
                            <a href="" className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export { Portfolio }