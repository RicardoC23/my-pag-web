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
                        <img src = {'../Pictures/contry-app.jpg'} className='img-project'/>
                        <p>Contry-App</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/Contry-app" target='_blank' className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-todo'>
                        <img src = {'../Pictures/TODO-app.jpg'} className='img-project'/>
                        <p>TODO-List-React</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/TODO-App" target='_blank' className='botton-git'>Github</a>
                            <a href="https://registro-todo.netlify.app/" target='_blank' className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-pokedex'>
                        <img src = {'../Pictures/POKEDEX.png'} className='img-project'/>
                        <p>Pokedex-React</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/Pokedex" target='_blank' className='botton-git'>Github</a>
                            <a href="" className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/controller.png'} className='img-project'/>
                        <p>PS4-Pag-Responsive</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/pag-responsive" target='_blank' className='botton-git'>Github</a>
                            <a href="https://play-s-pag-responsive.netlify.app/" target='_blank' className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/carrito-shop.png'} className='img-project'/>
                        <p>Shopping Cart</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/Shooping-Cart" target='_blank' className='botton-git'>Github</a>
                            <a href="https://app-shoping-car.netlify.app" target='_blank' className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
                <div className='container-project-git'>
                    <div className='container-ps'>
                        <img src = {'../Pictures/Form-1.jpg'} className='img-project'/>
                        <p>Form-React</p>
                        <div className='container-botton'>
                            <a href="https://github.com/RicardoC23/Form-React" target='_blank' className='botton-git'>Github</a>
                            <a href="https://app-form-funcional.netlify.app/" target='_blank' className='live-demo'>Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}


export { Portfolio }