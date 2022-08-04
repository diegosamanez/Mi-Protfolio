import Send from '../pages/Send';
import '../styles/Formulario.scss';
import whatsapp from '../images/whatsapp.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'

function Contact(){

//     Esto podrias manejarlo como un env
//     por ejemplo en una archivo environment.js export const EMAIL = import.meta.env.VITE_EMAIL
//     y en un archivo .env EMAIL='rafaeljuarezflores@gmail.com'
//     const MyEmail = 'rafaeljuarezflores@gmail.com'

    const handleEventSubmit = async (e) => {
        e.preventDefault()
//         add fetch request
        const response = await fetch('https://formsubmit.co/rafaeljuarezflores@gmail.com', {
            method: 'POST',
            body: new FormData(e.target)
        })
        
        const responseJson = response.json()
//         Ahora puedes manejar la respuesta como mejor te parezca
        console.log(responseJson)
    }

    return(
        <div className='contact'>
          <div className="contenedor-formulario">
            <div className='comunicate-conmigo' id='comunicate-conmigo'>
              <h4>COMUNICATE</h4>
              <h4>CONMIGO</h4>
            </div>
         
          <form onSubmit={handleEventSubmit} method="POST">
            <div>
              <label>Nombre</label>
              <input type="text" name='name' required/>
            </div>
//             <input type="hidden" name='_next' value={<Send/>} />
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
