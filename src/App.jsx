import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import './styles/styles.css'
import './styles/responsividade.css'

function App() {

  return (
    <>
       <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/sobre" element={<Sobre />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
