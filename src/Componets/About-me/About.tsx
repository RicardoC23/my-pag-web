import './About-me.css'

function About() {
    return (
        <div className='container-About'>
            <h1>
                About Me
            </h1>
            <div className='container-section'>
                <div className='container-story'>
                    <img src = {'../Pictures/story.jpg'} className='img-about'/>
                    <div className='container-text'>
                        <h2>Story</h2>
                        <p>
                        Since I was young I had a passion for technology, but due to financial constraints I was unable to study programming at school. Even so, I never gave up. I learned on my own and eventually got a job at a tech company. I worked hard, faced challenges, and learned from my peers. I became a competent and respected developer in my company. And best of all, I managed to achieve my dream despite the obstacles in my way. Never underestimate the power of determination and passion.
                        </p>
                    </div>
                </div>
                <div className='container-mission'>
                    <div className='container-text'>
                        <h2>Mission</h2>
                        <p>
                        As a developer, my mission is to create technological solutions that solve problems and improve people's lives. My goal is to simplify processes, ensure security and accessibility, and meet user objectives, through efficient, easy-to-use tools that make a positive difference in the world.
                        </p>
                    </div>
                    <img src = {'../Pictures/mision.jpg'} className='img-about'/>
                </div>
                <div className='container-vision'>
                    <img src = {'../Pictures/vision.jpg'} className='img-about'/>
                    <div className='container-text'>
                        <h2>Vision</h2>
                    <p>
                    My vision as a developer is to be a leader in creating innovative and sustainable technology solutions that have a positive impact on society. I want to work as a team to develop accessible and safe solutions that improve people's lives and generate significant change in the world.
                    </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}


export { About }