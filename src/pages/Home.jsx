import '../styles/Home.scss'
import AboutMe from "../components/AboutMe"
import Formulario from "../components/Contact"
import Presentacion from '../components/Presentacion'

function Home() {

  return (
    <div className="App">
      <Presentacion/>
      <AboutMe/>
      <Formulario/>
    </div>
  )
}

export default Home;