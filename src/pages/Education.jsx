import { useState } from 'react'
import Heading_Type_2 from '../common/Heading_Type_2';

const Education = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <main className={`d-flex flex-column justify-content-center align-items-center w-100 main_page_layout ${showModal ? "main-blur" : ""
            }`}>

            <div className="custom_margin_extra">
                <Heading_Type_2 heading="Knowledge & Qualifications" />
            </div>

            <section className="about_section">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <div className="image_container d-flex flex-row justify-content-center align-items-end" data-aos="fade-right">
                            <img src={"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Experience Image" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="py-5" data-aos="fade-left">
                            {/* <Heading_Type_1 {...experiencePage} /> */}
                            <div className="general_text">
                                <p>
                                    I have completed <span className='highlighter'>Bachelor of Technology</span> in <span className="highlighter">Computer Science</span>, <span className="highlighter">ABESIT Group of Institutions</span> — built a strong foundation in software development, programming, and problem-solving.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}

export default Education;
