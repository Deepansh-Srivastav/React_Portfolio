import CardComponent from "../common/CardComponent";
import Heading_Type_2 from "../common/Heading_Type_2";
import { projectHeading, projectsData } from "../data/projectsPageData";
import "../styles/Projects.css"
import { useState } from "react";

const ProjectDisplay = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    const handleClick = (index, category) => {
        setActiveIndex(index);

        if (category === "All") {
            return setFilteredProjects(projectsData)
        }

        const filteredArray = projectsData.filter((item) => {
            return item.category === category
        })

        setFilteredProjects(filteredArray)
    };

    return (
        <>
            <div className="custom_margin_extra">
                <Heading_Type_2 {...projectHeading} />
            </div>

            <section className="d-flex justify-content-center align-items-center flex-column tabination_container py-5 ">

                <div className="project_navbar_container w-50">

                    <nav className="d-flex justify-content-around align-items-center tabination_navbar w-50" data-aos="fade-down">

                        <a
                            href="#"
                            className={activeIndex === 0 ? 'active active_tab_button' : ''}
                            onClick={() => handleClick(0, 'All')}
                        >
                            All
                        </a>

                        <a
                            href="#"
                            className={activeIndex === 4 ? 'active active_tab_button' : ''}
                            onClick={() => handleClick(4, 'MERN')}
                        >
                            MERN
                        </a>

                        <a
                            href="#"
                            className={activeIndex === 2 ? 'active active_tab_button' : ''}
                            onClick={() => handleClick(2, 'REACT')}
                        >
                            REACT
                        </a>

                        <a
                            href="#"
                            className={activeIndex === 1 ? 'active active_tab_button' : ''}
                            onClick={() => handleClick(1, 'HTML')}
                        >
                            VANILLA
                        </a>
                    </nav>

                </div>

                <div className="project_cards_section my-5">
                    {
                        filteredProjects.map(project => {
                            return <CardComponent {...project} key={project.id} />
                        })
                    }
                </div>

            </section>
        </>
    )
}

export default ProjectDisplay