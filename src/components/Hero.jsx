import "../styles/Hero.css";
import "../styles/Common.css";
import {hero_image} from "../data/images.js"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
    return (
        <section id="myImage" className="w-100 d-flex justify-content-center align-items-center custom_margin hero_section">
            <div className="d-flex flex-column justify-content-center align-items-center mt-3 hero_section" data-aos="fade-down">
                <div className="d-flex flex-column justify-content-center align-items-center mt-5 img_container">
                    <img src={hero_image} alt="My Image" />
                </div>

                <h2>
                    Hi, I'm Deepansh{' '}
                    <span style={{ color: 'var(--main-theme-color)', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Srivastav']}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            deleteSpeed={80}
                            delaySpeed={2000}
                        />
                    </span>
                </h2>
            </div>
        </section>
    );
}

export default Hero;