import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"
import PatientProfile from "./pages/patient/PatientProfile" 
import Layout from "./components/Layout"
import DoctorProfile from "./pages/doctor/DoctorProfile"

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
          <Route path= "/verify-email" element={<VerifyEmail/>} />
          <Route path="/patient/profile" element={<Layout><PatientProfile/></Layout>} />
          <Route path="/doctor/profile" element={<Layout><DoctorProfile/></Layout>} />
        </Routes>
      </div>
    </Router>
  
  )
}

export default App