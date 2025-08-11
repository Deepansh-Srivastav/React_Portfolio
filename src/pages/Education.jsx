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

        </main>
    )
}

export default Education;
