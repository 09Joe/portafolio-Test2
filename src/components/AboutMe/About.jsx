import './About.css'

const About = () => {


  return (
    <section className='about-container'>
        <div className='about-content'>
            <h2>Mi nombre es Joel Tapia</h2>
            <h3>Y soy un desarrollador fullstack</h3>
            <span></span>
            <p>
                Es de mucho interes para mi poder participar en el desarrollo de proyectos sea en el ambito frontend o backend
                al igual que poder trabajar con nuevas tecnologias y reforzar mi desarrollo profesional
            </p>
        </div>

        <div className='about-img'>
            <div>
                <div className='tech-icon'>
                    <img src="./reactlogo.png" alt="" />
                </div>
                <img src="./codecoffe.png" alt="" />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src="./logojs.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./html5logo.png" alt="" />
                </div>
                <div className='tech-icon'>
                    <img src="./ccslogo.png" alt="" />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default About