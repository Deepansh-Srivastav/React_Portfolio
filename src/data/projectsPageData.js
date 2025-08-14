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
    git,
    github,
    muiIcon,
    SD1,
    SD2,
    zomato,
    zomato2,
    zomato3,
    zomato4,
    Cafe,
    Cafe2,
    Cafe3,
    Cafe4,
    Cafe5,
    pf,
    pf2,
    pf3,
    pf4
} from "./images.js";

const projectHeading = {
    heading: "My Projects",
    subHeading: "From Concept to Code"
};

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
};