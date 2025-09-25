import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"

const App = () =>{

  return (
  
    <Router>
      <div>
        <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element = {<Home/>} />
          <Route path="/signin" element= {<SignIn/>} />
          <Route path="/signup" element= {<Signup/>} />
        </Routes>
      </div>
      <div>
        <Footer/>
      </div>
    </Router>
  
  )
}

export default App