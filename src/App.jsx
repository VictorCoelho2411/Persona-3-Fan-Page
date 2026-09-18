
import { Route, Routes } from 'react-router-dom'
import './Estilo/App.css'
import Menu from './componentes/Menu'
import Rodape from './componentes/Rodape'
import Home from './paginas/Home'
import Personagens from './paginas/Personagens'
import Temas from './paginas/Temas'
import Referencias from './paginas/Referencias'
import Arcanos from './paginas/Arcanos'




function App() {

  return (
    <>
      <Menu />
      <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/personagens' element = {<Personagens />} />
      <Route path='/temas' element = {<Temas />} />
      <Route path='/referencias' element = {<Referencias />} />
      <Route path='/arcanos' element = {<Arcanos />} />
      </Routes>
      <Rodape />
    </>
  )
}

export default App
