import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () =>{

  return (
  
    <Router>
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>} />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </Router>
  
  )
}

export default App