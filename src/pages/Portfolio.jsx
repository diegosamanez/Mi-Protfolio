import catmania from '../images/catmania.png'
import lizmandala from '../images/lizmandala.png'
import '../styles/Portfolio.scss'

function Portfolio(){
    return(
        <div className="contenedor-portfolio">
            <div>
                <img src={catmania}/>
            <p>catmania.io es una aplicación web, el cual trata de un videojuego online que consta de nfts en la cual los usuarios compran, venden e intercambiaban nfts los cuales en su mayoria eran imagenes de gatos, el cual acumulaba tokens al jugar con ellos, lo cual incrementaba el valor de los nfts para luego poder venderlo, intercambarlo o retirar tus ingresos , a traves del sistema de criptomonedas de MetaMask, el cual consiste en un monedero que almacena las criptomonedas acumuladas debido a los nfts.</p>
            </div>
            <div>
                <img src={lizmandala}/>
            <p>lizmandala.com es una página web orientada a la espiritualidad de las personas y ayudarlos con algunas posiciones de yoga , bienestar y salud para mejorar la vida de sus usuarios, el diseño de esta página es totalmente responsiva y trata de varios componentes organizadas con CSS-Grid, ademas del logo giratorio que se encuentra en medio, debajo del navbar.</p>
            </div>
        </div>
    )
}

export default Portfolio;