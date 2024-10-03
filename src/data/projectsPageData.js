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

// Tech Logos import
import html from "../assets/Logos/html.png"
import css from "../assets/Logos/css.png"
import js from "../assets/Logos/js.png"
import bs from "../assets/Logos/bs.png"
import azure from "../assets/Logos/azure.png"
import react from "../assets/Logos/react.png"
import git from "../assets/Logos/git.png"
import github from "../assets/Logos/github.png"

const projectHeading = {
    heading: "My Projects",
    subHeading: "Showcasing Creativity"
}

const projectsData = [
    {
        id: 1,

        title: "Investment Calculator",

        description: "This is the Clone Web App of the Zomato Web Application. It is also Fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size. Each and every component on this webpage is inspired from the ZOMATO page and created by me.  It can be operated in 2 languages हिंदी and English.",

        shortDescription: 'This is my official portfolio web app, fully responsive and compatible with devices of any size.',

        images: [Cafe, Cafe2, Cafe3, Cafe4, Cafe5],

        category: 'REACT',

        github: "https://github.com/Deepansh-Srivastav/Canteen-Website-Project",

        visit: "https://gauricafe.netlify.app/",

        link: "/project/zomato_landing_page",

        techLogos: [react, css, bs, git ,azure],

    },
    {
        id: 2,

        title: "Portfolio Website",

        description: "This is the Clone Web App of the Zomato Web Application. It is also Fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size. Each and every component on this webpage is inspired from the ZOMATO page and created by me.  It can be operated in 2 languages हिंदी and English.",

        shortDescription: 'This is a fully responsive clone of the landing page of Zomato. It supports both Hindi and English languages for a wider audience.',

        images: [pf, pf2, pf3, pf4],

        category: 'HTML',

        github: "https://github.com/Deepansh-Srivastav/My-Portfolio2.0",

        visit: "https://deepansh-srivastav.github.io/My-Portfolio2.0/",

        link: "/project/zomato_landing_page",

        techLogos: [html, css, js, git, github],

    },
    {
        id: 0,

        title: "Zomato Landing Page",

        description: "This is the Clone Web App of the Zomato Web Application. It is also Fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size. Each and every component on this webpage is inspired from the ZOMATO page and created by me.  It can be operated in 2 languages हिंदी and English.",

        shortDescription: 'This is a fully responsive clone of the landing page of Zomato. It supports both Hindi and English languages for a wider audience.',

        images: [zomato, zomato2, zomato4, zomato3],

        category: 'HTML',

        github: "https://github.com/Deepansh-Srivastav/Responsive-Zomato-Clone",

        visit: "https://deepansh-srivastav.github.io/Responsive-Zomato-Clone/",

        link: "/project/zomato_landing_page",

        techLogos: [html, css, js, git, github],

    },
    {
        id: 3,

        title: "Cafe Website",

        description: "This is the Clone Web App of the Zomato Web Application. It is also Fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size. Each and every component on this webpage is inspired from the ZOMATO page and created by me.  It can be operated in 2 languages हिंदी and English.",

        shortDescription: 'This is my official portfolio web app, fully responsive and compatible with devices of any size.',

        images: [Cafe, Cafe2, Cafe3, Cafe4, Cafe5],

        category: 'HTML',

        github: "https://github.com/Deepansh-Srivastav/Canteen-Website-Project",

        visit: "https://gauricafe.netlify.app/",

        link: "/project/zomato_landing_page",

        techLogos: [html, css, js, bs , git],

    },
]

export {
    projectsData,
    projectHeading
}