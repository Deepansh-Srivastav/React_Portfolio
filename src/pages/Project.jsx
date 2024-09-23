import Heading_Type_2 from "../common/Heading_Type_2";
import ProjectDisplay from "../components/ProjectDisplay";
import { projectHeading, projectsData } from "../data/projectsPageData";

export default function Project() {
  return (
    <main className="d-flex flex-column justify-content-center align-items-center w-100 main_page_layout">

      <ProjectDisplay/>

    </main>
  )
}

// custom_margin