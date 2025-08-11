import { FaInstagram, FaLinkedinIn, IoLogoGithub } from "./icons.js"

import BitlyzeCeritifcate from "../assets/Certificates/Bitlyze.png"
import ProDevCertificate from "../assets/Certificates/Prodev.png"

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
        logo: "https://dashboard-internal.unravelapp.com/static/media/logo.8739eb776c97f9ebf4b3.png",
        companyName: "Unravel",
        duration: "Jan 2025 – Present",
        description:
            "Built and maintained a live real-time dashboard, integrating features such as Google OAuth and other enhancements to improve usability and performance.",
        moreLink: null,
        certificate: null,
        isActive: true,
    },
    {
        logo: "https://www.bitlyze.com/_next/image/?url=%2Fimages%2Flogo.png&w=1200&q=75",
        companyName: "Bitlyze",
        duration: "Feb 2024 – July 2024",
        description:
            "Contributed to Bitlyze’s marketing platform by developing reusable UI components and a blog module with full CRUD functionality using REST APIs.",
        moreLink: null,
        certificate: BitlyzeCeritifcate,
        isActive: false
    },
    {
        logo: "https://www.abesit.in/wp-content/themes/abesit/images/logo.png",
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
        logo: "https://www.abesit.in/wp-content/themes/abesit/images/logo.png",
        background: "transparent",
        companyName: "B.Tech, CSE(AI)",
        duration: "Nov 2020 – July 2024",
        description: "Completed Bachelor of Technology in Computer Science (AI) from ABESIT, gaining a strong foundation in software development, programming, and problem-solving.",
        moreLink: null,
        certificate: BitlyzeCeritifcate,
        type:"education"
    }

]