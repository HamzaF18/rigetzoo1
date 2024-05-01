import "./NavBar.css"
import { useNavigate } from "react-router-dom";
import logo from "../../../src/Assets/lion.png"



const NavButton = ({ text, path }) => {

    const navigate = useNavigate()

    return (
        <button className="nav-button" onClick={() => navigate(path)}>
            {text}
        </button>
    )
}



const NavBar = () => {
    return (
        <div className="nav-bar">
            <a href="/"><img className="logo" src={logo}/></a>
            <div className="nav-buttons">
                <NavButton text="Education" path="/education"/>
                <NavButton text="About" path="/about"/>
                <NavButton text="Accomodation" path="/accomodation"/>
                <NavButton text="Sign In" path="/signin"/>
                {/* <NavButton className ="main-btn"text="Ticket" path="/ticket"/> */}
            </div>
        </div>
    )
}
export default NavBar;
