import './App.css'
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function App() {

  return (
    <div className='container-app'>
      <h1 className='header'>🌸Meus links importantes🌸</h1>

      <a href="https://github.com/jacquelinemathias" className='links' target='_blank'><DiGithubBadge className='icones'/>GitHub</a>
      <a href="https://www.linkedin.com/in/jacqueline-mathias-2b9aa81b5/" className='links' target='_blank'><FaLinkedin className='icones'/>LinkedIn</a>
      <a href="https://www.codedex.io/" className='links' target='_blank'><FaCode className='icones'/>Codédex</a>
    </div>
  )
}

export default App