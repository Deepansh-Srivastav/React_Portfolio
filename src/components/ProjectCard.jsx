import Card from 'react-bootstrap/Card';
import "../styles/Card.css"

// FOR SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const ProjectCard = ({
    title,
    shortDescription,
    images,
    github,
    visit,
    techLogos,
}) => {

    function handleClick() {
        alert(title);

    }

    return (
        <div className="projectCard" data-aos="fade-up">
            <div className="thumbnail">
                <Thumbnail images={images} />
            </div>

            <div className="description">
                <h3 className="title">{title}</h3>
                <p className="shortDescription">{shortDescription}</p>

                <div className="buttons">
                    <a href={visit} target="_blank" rel="noopener noreferrer"><button>Visit</button></a>
                    <button className="mx-1">Read More</button>
                    <a href={github} target="_blank" rel="noopener noreferrer"><button>Github</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard



function Thumbnail({ images }) {
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
            style={{ maxWidth: "390px" }}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className="imageOverlayWrapper">
                        <Card.Img variant="top" src={image} />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}