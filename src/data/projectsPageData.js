import react from "../assets/Project_Images/REACT_2.png"
import zomato from "../assets/Project_Images/zomato.png"

const projectHeading = {
    heading:"My Projects",
    subHeading:"Showcasing Creativity"
}

const projectsData = [

    {
        id: 0,

        title: "Zomato Landing Page",

        description:"This is the Clone Web App of the Zomato Web Application. It is also Fully responsive in nature which means It can work perfectly on almost any device regardless of its dimensions and size. Each and every component on this webpage is inspired from the ZOMATO page and created by me.  It can be operated in 2 languages हिंदी and English.",

        shortDescription : 'This is a fully responsive clone of the landing page of Zomato. It supports both Hindi and English languages for a wider audience.',

        image :zomato,

        category : 'HTML',

        github:"https://github.com/Deepansh-Srivastav/Responsive-Zomato-Clone",

        visit:"https://deepansh-srivastav.github.io/Responsive-Zomato-Clone/",

        link:"/project/zomato_landing_page"

    },
]



export {
    projectsData,
    projectHeading
}