import { Link } from 'react-router-dom'
import '../Estilo/Menu.css'

function Menu() {

  return (
    <>
    <header>
        <nav className='menu'>
          <img src={`${import.meta.env.BASE_URL}Capas/Persona3icon.png`} alt="" />
            <h1>Persona 3 Reload Fan Page</h1>
            <div>
                <Link to = "/">Home</Link>
                <Link to = "/personagens">Personagens</Link>
                {/* <Link to = "/referencias">Referências</Link>
                <Link to = "/temas">Temas</Link> */}
                <Link to = "/arcanos">Arcanos</Link>
            </div>
            
        </nav>
    </header>
      
    </>
  )
}

export default Menu
