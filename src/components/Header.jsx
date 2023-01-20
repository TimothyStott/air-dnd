import logo from "../img/logo.png"

export default function Header() {
    return (
        <div className="header-container">
            <a href="https://airbnb.com" target="new"><img className="header-logo" src={logo}></img></a>
        </div>)
}