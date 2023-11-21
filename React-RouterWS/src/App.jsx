import { Routes, Route, Link } from "react-router-dom"
import './App.css'
import Blue from './blue.jsx'
import Red from './red.jsx'
import Home from './home.jsx'
import './index.css'

const App = () => {
  

  return (
    <div id="container">
      <h1>Still working</h1>

      <div id="navbar">
         <Link to='/red'>Red</Link>
         <Link to='/blue'>Blue</Link>
         <Link to='/'>Home</Link>
        
        </div>



      <div id="main-section">
        <Routes>
            <Route path="/blue" element={`Blue`}/>
            <Route path="/red" element={`Red`}/>
            <Route path="/" element={`home`}/>
        </Routes>
          </div>

    </div>
      

  )

}

export default App



