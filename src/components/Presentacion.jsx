import {useTypewriter} from 'react-simple-typewriter'
import '../styles/Presentacion.scss'

function Presentacion(){

const {text} = useTypewriter({
    words: ['Hola, Bienvenido'],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
});

return(
    <div className='presentacion' id='presentacion'>
        {text}
    </div>
)

}

export default Presentacion;