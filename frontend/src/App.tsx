import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"

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
    </Router>
  )
}

export default App