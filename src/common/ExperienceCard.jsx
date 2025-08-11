import { Badge } from "react-bootstrap";

export default function ExperienceCard({
    logo,
    companyName,
    duration,
    description,
    moreLink,
    isActive = false,
    background = "white",
    certificate,
    handleCertificateImage,
    type = "experience"

}) {

    return (
        <div className="experience-card mb-5 mx-3 rounded-3" data-aos="fade-up">

            <div className="p-3 experience-logo-container" style={{
                backgroundColor: background
            }}>
                <img
                    src={logo}
                    alt={`${companyName} logo`}
                    className="company-logo img-fluid"
                />
            </div>

            <div className="col-md-10 col-12 p-4 experience-info-container">
                <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                    <h5 className="mb-0 fw-bold">{companyName}</h5>

                    {duration && (
                        <Badge
                            bg="success"
                            style={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                color: "#fff",
                                fontWeight: "400"
                            }}
                        >
                            {duration}
                        </Badge>
                    )}


                </div>

                <p className="experience-description">{description} </p>

                <div className="d-flex justify-content-between">

                    {!isActive && (
                        <button
                            className='projectButton'
                            onClick={() => {
                                handleCertificateImage(certificate);
                            }}
                        >
                            {type === "experience" ? "View Certificate" : "View Degree"}
                        </button>
                    )}

                    {moreLink && (
                        <button
                            className='projectButton'
                            onClick={() => window.open(moreLink, "_blank")}
                        >
                            See More
                        </button>
                    )}


                </div>
            </div>

        </div>
    );
};