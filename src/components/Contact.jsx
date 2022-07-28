import Send from '../pages/Send';
import '../styles/Formulario.scss';
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

function Contact(){

const MyEmail = 'rafaeljuarezflores@gmail.com'

function Email(){
    return(`https://formsubmit.co/${MyEmail}`)
}

    return(
        <div className='contact'>
          <div className="contenedor-formulario">
            <div className='comunicate-conmigo' id='comunicate-conmigo'>
              <h4>COMUNICATE</h4>
              <h4>CONMIGO</h4>
            </div>
         
          <form action={Email} method="POST">
            <div>
              <label>Nombre</label>
              <input type="text" name='name' required/>
            </div>
            <input type="hidden" name='_next' value={<Send/>} />
            <div>
              <label>Email</label>
              <input type="email" name='email' required/>
            </div>
            <div>
              <label id='mensaje'>Mensaje</label>
              <textarea type="text" id='textarea' name='message' required/>
              <button type='Sumbit' id='Submit'>Enviar</button>
            </div>
          </form>
          </div>
          <div id='enlaces-footer'>
            <a href='https://wa.me/34674830451' target="_blank"><img src={whatsapp}/></a>
            <br />
            <a href='https://www.instagram.com/rafaeljuarezflores/' target="_blank"><img src={instagram}/></a>
            <br />
            <a href='https://www.linkedin.com/in/rafael-juarez-flores-6b524620a' target="_blank"><img src={linkedin}/></a>
            <br />
          </div>
        </div>
    )
}

export default Contact;