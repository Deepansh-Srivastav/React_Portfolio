import "../styles/Hero.css"
import myImage from "../assets/Images/myImage.png"

function Hero() {
    return (
        <section id="myImage" className="w-100 d-flex justify-content-center align-items-center mt-5 hero_section">

            <div className="d-flex flex-column justify-content-center align-items-center mt-5 hero_section">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 img_container">
                    <img src={myImage} alt="My Image" />
                </div>
                <h2>
                    Deepansh Srivastav
                </h2>
            </div>

        </section>
    )
}

export default Hero
