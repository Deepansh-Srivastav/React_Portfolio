// Zomato Project Image Import 
import zomato from "../assets/Project_Images/Zomato/zomato1.png"
import zomato2 from "../assets/Project_Images/Zomato/zomato2.png"
import zomato3 from "../assets/Project_Images/Zomato/zomato3.png"
import zomato4 from "../assets/Project_Images/Zomato/zomato4.png"

// ZomCafeato Project Image Import 
import Cafe from "../assets/Project_Images/Cafe/cafe1.png"
import Cafe2 from "../assets/Project_Images/Cafe/cafe2.png"
import Cafe3 from "../assets/Project_Images/Cafe/cafe3.png"
import Cafe4 from "../assets/Project_Images/Cafe/cafe4.png"
import Cafe5 from "../assets/Project_Images/Cafe/cafe5.png"

// Portfolio Project Image Import 
import pf from "../assets/Project_Images/Portfolio/pf1.png"
import pf2 from "../assets/Project_Images/Portfolio/pf2.png"
import pf3 from "../assets/Project_Images/Portfolio/pf3.png"
import pf4 from "../assets/Project_Images/Portfolio/pf4.png"

import {
    mongoIcon,
    reactIcon,
    nodeIcon,
    expressIcon,
    postmanIcon,
    html,
    css,
    js,
    bs,
    azure,
    git,
    github,
    muiIcon,
    SD1,
    SD2
} from "./images.js"


const projectHeading = {
    heading: "My Projects",
    subHeading: "From Concept to Code"
}

const projectsData = [

    {
        id: 4,
        title: "SwiftDrop",
        priority: 3,
        description: "SwiftDrop is a modern delivery web application designed to enable secure order placement, real-time updates, and a seamless shopping experience. Currently under development, it includes features like Google login for quick and secure access, ensuring a smooth and personalized user experience.",
        shortDescription: "SwiftDrop is a delivery web app with real-time updates for a fast, secure, and smooth experience. Currently under development.",
        images: [SD1, SD2],
        category: 'MERN',
        github: "https://github.com/Deepansh-Srivastav/SwiftDrop/tree/main/Server",
        visit: "https://swift-drop.vercel.app/",
        link: "/project/swiftdrop",
        techLogos: [mongoIcon, expressIcon, reactIcon, nodeIcon, postmanIcon, git, muiIcon, github],
    },

    {
        id: 0,
        title: "Zomato Landing Page",
        priority: 1,
        description: "A fully responsive clone of Zomato’s landing page supporting English and Hindi. Designed to work seamlessly on all devices with attention to design and structure.",
        shortDescription: "This is a fully responsive clone of the landing page of Zomato. It supports both Hindi and English languages for a wider audience.",
        images: [zomato, zomato2, zomato4, zomato3],
        category: 'HTML',
        github: "https://github.com/Deepansh-Srivastav/Responsive-Zomato-Clone",
        visit: "https://deepansh-srivastav.github.io/Responsive-Zomato-Clone/",
        link: "/project/zomato_landing_page",
        techLogos: [html, css, js, git, github],
    },

    // {
    //     id: 1,
    //     title: "Investment Calculator",
    //     priority: 2,
    //     description: "A reactIcon-based investment calculator that helps users estimate future returns. It features an intuitive UI and responsive design, making it user-friendly across all devices.",
    //     shortDescription: "This is my official portfolio web app, fully responsive and compatible with devices of any size.",
    //     images: [Cafe, Cafe2, Cafe3, Cafe4, Cafe5],
    //     category: 'reactIcon',
    //     github: "https://github.com/Deepansh-Srivastav/Canteen-Website-Project",
    //     visit: "https://gauricafe.netlify.app/",
    //     link: "/project/zomato_landing_page",
    //     techLogos: [reactIcon, css, bs, git, azure],
    // },

    {
        id: 2,
        title: "Portfolio Website",
        priority: 1,
        description: "A personal portfolio website showcasing my projects, skills, and resume. It is fully responsive, cross-browser compatible, and built using HTML, CSS, and JavaScript.",
        shortDescription: "A fully responsive, cross-browser compatible portfolio highlighting my projects, skills, and resume.",
        images: [pf, pf2, pf3, pf4],
        category: 'HTML',
        github: "https://github.com/Deepansh-Srivastav/My-Portfolio2.0",
        visit: "https://deepansh-srivastav.github.io/My-Portfolio2.0/",
        link: "/project/zomato_landing_page",
        techLogos: [html, css, js, git, github],
    },

    {
        id: 3,
        title: "Cafe Website",
        priority: 1,
        description: "A modern and responsive cafe website inspired by real-world layouts. Built with HTML, CSS, and Bootstrap, it adapts beautifully across screen sizes and devices.",
        shortDescription: "A responsive cafe website designed with HTML, CSS, and Bootstrap, featuring a modern layout that adapts seamlessly to all screen sizes.",
        images: [Cafe, Cafe2, Cafe3, Cafe4, Cafe5],
        category: 'HTML',
        github: "https://github.com/Deepansh-Srivastav/Canteen-Website-Project",
        visit: "https://gauricafe.netlify.app/",
        link: "/project/zomato_landing_page",
        techLogos: [html, css, js, bs, git],
    },
];


export {
    projectsData,
    projectHeading
}