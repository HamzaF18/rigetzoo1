import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import NavBar from './Components/NavBar/NavBar';
import Accomodation from './Pages/Accomodation/Accomodation';
import Education from './Pages/Education/Education';
import Sitemap from './Components/Sitemap/Sitemap';
import AuthForm from './Pages/AuthForm/AuthForm';
import Help from './Pages/Help/Help';
import Contact from './Pages/Contact/Contact';
import Legal from './Pages/Legal/Legal';
import Terms from './Pages/Terms/Terms';
import FAQ from './Pages/FAQ/FAQ';
import Animals from './Pages/Animals/Animals';
import Register from './Pages/Register/Register';
import TicketBookingForm from './Pages/TicketBookingForm/TicektBookingForm';



function App() {


  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/signin" element={<AuthForm />} />
        <Route path="/help" element={<Help />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/ticket" element={<TicketBookingForm/>}/>
       
      </Routes>
      <footer>
        <Sitemap />
      </footer>
    </div>
  );
}

export default App;
