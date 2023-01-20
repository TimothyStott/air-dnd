import photogrid from "../img/photo-grid.png";

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-photo-container"><img src={photogrid} alt="photo grid" className="hero-image"></img></div>
            <div className="hero-text-container">
                <h1 className="hero-main-text">Online Experiences</h1>
                <h3 className="hero-sub-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
            </div>
        </div>
    )
}