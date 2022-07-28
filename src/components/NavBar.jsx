import '../styles/NavBar.scss'
import { Link } from 'react-router-dom';
import icon from '../images/navbar-icon.png';

function NavBar(){

    function Responsive() {
        let x = document.getElementById("container-navbar");
        if (x.className === "container-navbar") {
          x.className += " responsive";
        } else {
          x.className = "container-navbar";
        }
      }

    return(
    <div className='container-navbar' id='container-navbar'>
          <Link id='nombre' to='/'>Rafael Juarez Flores</Link>
            <div className='items'>
                <Link to='/AboutMe' id='link'>Sobre Mi</Link>
                <Link to='/Portfolio' id='link'>Portfolio</Link>
                <Link to='/Contact' id='link'>Contacto</Link>
            </div>
            <button id='icon' onClick={Responsive}><img src={icon} alt="icon" /></button>
    </div>  
    )
}

export default NavBar;