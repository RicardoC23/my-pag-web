import './About-me.css'

function About() {
    return (
        <div className='container-About'>
            <h1 id='About-me'>
                About Me
            </h1>
            <div className='container-section'>
                <div className='container-story'>
                    <img src = {'../Pictures/story.jpg'} className='img-about'/>
                    <div className='container-text'>
                        <h2>Story</h2>
                        <p>
                        I learned programming with effort and dedication, and I got a job in technology. I worked hard, learned from my peers, and became a competent and respected developer.
                        </p>
                    </div>
                </div>
                <div className='container-mission'>
                    <div className='container-text'>
                        <h2>Mission</h2>
                        <p>
                        Create technological solutions that improve people's lives, simplify processes, ensure security and accessibility, and meet user objectives.
                        </p>
                    </div>
                    <img src = {'../Pictures/mision.jpg'} className='img-about'/>
                </div>
                <div className='container-vision'>
                    <img src = {'../Pictures/vision.jpg'} className='img-about'/>
                    <div className='container-text'>
                        <h2>Vision</h2>
                    <p>
                    As a developer, my vision is to create innovative and sustainable technology solutions that have a positive impact on society, improving people's lives and creating meaningful change.
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export { About }