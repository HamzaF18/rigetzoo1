import "./Register.css";

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-h1">
                <h1>Register</h1>
            </div>
            <div className="user-input">
                <input className="user-container" type="text" placeholder="First Name" />
            </div>
            <div className="user-input">
                <input className="user-container" type="text" placeholder="Surename" />
            </div>
            <div className="user-input">
                <input className="user-container" type="email" placeholder="email address" />
            </div>
            <div className="passwrd-input">
                <input className="passwrd-container" type="password" placeholder="password" />
            </div>
            <div className="auth-btn">
                <button>done</button>
            </div>
            <a href="/signin">Have an account? Login</a>
        </div>
    )
}
export default Register;