import {
    FaInstagram,
    FaLinkedinIn,
    IoLogoGithub,
    AiFillHome,
    FaGraduationCap,
    IoIosBriefcase,
    FaProjectDiagram,
} from "./icons.js"

import {
    BitlyzeCeritifcate,
    ProDevCertificate,
    Degree,
    Git_Github,
    Cetpa,
    Web_dev,
    // unravel,
    abesit,
    bitlyze,
    udemy,
    cetpaLogo,
} from "../data/images.js"

export const footerSocialLinks = [
    {
        id: "linkedin",
        icon: FaLinkedinIn,
        url: "https://www.linkedin.com/in/deepansh-srivastav"
    },
    {
        id: "github",
        icon: IoLogoGithub,
        url: "https://github.com/Deepansh-Srivastav"
    },
    {
        id: "instagram",
        icon: FaInstagram,
        url: "https://www.instagram.com/sd_1303_/profilecard/?igsh=MWF2Z3E2YWpxYjJwbg=="
    },
];

export const experiencePageHeadingData = {
    heading: "My Experience",
    subHeading: "My Journey So Far"
}

export const experienceData = [
    {
        logo: "unravel",
        companyName: "Unravel",
        duration: "Jan 2025 – Present",
        description:
            "Built and maintained a live real-time dashboard, integrating features such as Google OAuth and other enhancements to improve usability and performance.",
        moreLink: null,
        certificate: null,
        isActive: true,
    },
    {
        logo: bitlyze,
        companyName: "Bitlyze",
        background: "transparent",
        duration: "Feb 2024 – July 2024",
        description:
            "Contributed to Bitlyze’s marketing platform by developing reusable UI components and a blog module with full CRUD functionality using REST APIs.",
        moreLink: null,
        certificate: BitlyzeCeritifcate,
        isActive: false,
    },
    {
        logo: abesit,
        background: "transparent",
        companyName: "ABESIT",
        duration: "July 2023 - Aug 2023",
        description:
            "Completed a certified internship focused on frontend fundamentals, developing a responsive canteen website using HTML5, CSS3, and JavaScript with an emphasis on responsive design and real-world usability.",
        moreLink: null,
        certificate: ProDevCertificate,
        isActive: false
    }
];

export const EducationData = [
    {
        logo: abesit,
        background: "transparent",
        companyName: "B.Tech, CSE(AI)",
        duration: "Nov 2020 – July 2024",
        description: "Completed Bachelor of Technology in Computer Science (AI) from ABESIT, gaining a strong foundation in software development, programming, and problem-solving.",
        moreLink: null,
        certificate: Degree,
        type: "education"
    }
];

export const CertificationData = [
    {
        logo: cetpaLogo,
        background: "white",
        companyName: "React.js Training",
        duration: "2023",
        description: "Completed a 1-week hands-on React.js training at CETPA, covering core concepts, component-based architecture, state management, and building interactive web applications.",
        moreLink: null,
        certificate: Cetpa,
    },
    {
        logo: udemy,
        background: "white",
        companyName: "Web-Development Course",
        duration: "2023",
        description: "Completed an online course from UDEMY, covering modern web development fundamentals, including responsive design with CSS & Bootstrap, DOM manipulation, and interactive web applications using JavaScript.",
        moreLink: null,
        certificate: Web_dev,
    },
    {
        logo: udemy,
        background: "white",
        companyName: "Git-Github Course",
        duration: "2023",
        description: "Completed a course from UDEMY that covered version control with Git, collaborative workflows on GitHub, and Markdown for project documentation.",
        moreLink: null,
        certificate: Git_Github,
    },
]

export const SidenavMenuUtils = [
    {
        id: "home",
        label: "Home",
        path: "/",
        icon: AiFillHome,
    },
    {
        id: "experience",
        label: "Experience",
        path: "/experience",
        icon: IoIosBriefcase,
    },
    {
        id: "projects",
        label: "Projects",
        path: "/projects",
        icon: FaProjectDiagram,
    },
    {
        id: "education",
        label: "Education",
        path: "/education",
        icon: FaGraduationCap,
    },
];