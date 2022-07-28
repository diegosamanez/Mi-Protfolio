import '../styles/AboutMe.scss';
import aproved from '../images/aproved3.png';
import perfil2 from '../images/perfil2.jpg';

function AboutMe(){

  let FrontEnd = [
    ['HTML', 'Advanced'],
    ['CSS', 'Advanced'],
    ['JavaScript', 'Advanced'],
    ['React', 'Intermediate'],
    ['Sass', 'Intermediate'],
    ['Bootstrap', 'Intermediate'],
    ['Jquery', 'Basic'],
  ];

  let BackEnd = [
    ['NodeJS', 'Basic'],
    ['MySQL', 'Intermediate'],
    ['PHP', 'Intermediate'],
    ['Python', 'Basic'],
    ['Laravel', 'Intermediate'],
    ['Docker', 'Basic'],
  ];

  return(
    <div className='contenedor-AboutMe'>
      <h2 id='AboutMe'>Sobre Mi</h2><br /><br />
      <div className='informacion-perfil' id='informacion-perfil'>
      <br />
      <div id='back-img'>
        <img src={perfil2} alt="perfil" id='perfil'/>
      </div>
        <p id='informacion'>Hola, mi nombre es Rafael Juarez Flores, soy un programador web orientado al desarrollo FullStack que utiliza herramientas como HTML, CSS, JavaSript, React, Vue, Laravel, MySQL, Sass, Jquery.<br/>
        Me apasiona el mundo de la programacion y el poder crear todo tipo de software a traves de este, ya que me Parece entretenido y divertido, ademas del hecho de trabajar con mi creatividad para poder diseñar la parte visual de una página web y crear el código al desarollarlo</p>
      </div>
      <div className='MyExperience'>
        <h2 id='MyExperience'>Mi Experiencia</h2><br /><br />
        <section className='contenedor-tools'> 
        <div className='Frontend'>
          <h4>Frontend Development</h4>
          <br />
          <div className='ToolsFrontEnd'>
            {FrontEnd.map((tools, index) =>
            <div key={index} id="ToolsFrontEnd">
                <img src={aproved} alt="aproved" id='aproved'/>
                <div>
                  <p id='tool'>{tools[0]}</p>
                  <p id='nivel'>{tools[1]}</p>
                </div>
              <br />
            </div>
            )
            }
        </div>
        </div>
        <br /><br />
        <div className='BackEnd'>
          <h4>Backend Development</h4>
          <br />
          <div className='ToolsBackEnd'>
            {BackEnd.map((tools, index) =>
            <div key={index} id="ToolsBackEnd">
              <img src={aproved} alt="aproved" id='aproved'/>
              <div>
                <p id='tool'>{tools[0]}</p>
                <p id='nivel'>{tools[1]}</p>
              </div>
              <br />
            </div>
            )
            }
          </div>
        </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe;