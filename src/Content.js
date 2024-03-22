// import images
import Hero_person from "./assets/images/Hero/avatar.svg";

import php from "./assets/images/Skills/php.png";
import laravel from "./assets/images/Skills/laravel.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import nest from "./assets/images/Skills/nest.png";
import vue from "./assets/images/Skills/vue.png";
import nuxt from "./assets/images/Skills/nuxt.png";
import alpine from "./assets/images/Skills/alpine.jpg";
import express from "./assets/images/Skills/express.png";
import mysql from "./assets/images/Skills/mysql.png";
import postgres from "./assets/images/Skills/post.png";
import mongo from "./assets/images/Skills/mongo.png"; 

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo1.png";
import services_logo3 from "./assets/images/Services/logo1.png";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import project4 from "./assets/images/projects/medium.png";
import project5 from "./assets/images/projects/tiktok.jpg";
import person_project from "./assets/images/projects/person.svg";
import person2 from "./assets/images/projects/person2.svg";

import avatar1 from "./assets/images/Projects/pos.png";
import avatar2 from "./assets/images/Projects/e-learning.png";
import avatar3 from "./assets/images/Projects/wheel.jpg";
import avatar4 from "./assets/images/Projects/onlineLearning.png";

import Hireme_person from "./assets/images/Hireme/person.svg";
import Hireme_person2 from "./assets/images/Hireme/person2.svg";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Web Developer",
    firstName: "SHWE",
    LastName: "PHUE HMONE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "8+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "PHP",
        // para: "Lorem ipsum text  dummy",
        logo: php,
      },
      {
        name: "Laravel",
        // para: "Lorem ipsum text  dummy",
        logo: laravel,
      },
      {
        name: "Vue JS",
        // para: "Lorem ipsum text  dummy",
        logo: vue,
      },
      {
        name: "Nuxt JS",
        // para: "Lorem ipsum text  dummy",
        logo: nuxt,
      },
      {
        name: "Alpine JS",
        // para: "Lorem ipsum text  dummy",
        logo: alpine,
      },
      {
        name: "Node JS",
        // para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Express JS",
        // para: "Lorem ipsum text  dummy",
        logo: express,
      },
      {
        name: "Nest JS",
        // para: "Lorem ipsum text  dummy",
        logo: nest,
      },
      {
        name: "React js",
        // para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "My SQL",
        // para: "Lorem ipsum text  dummy",
        logo: mysql,
      },
      {
        name: "Postgresql",
        // para: "Lorem ipsum text  dummy",
        logo: postgres,
      },
      {
        name: "Mongo DB",
        // para: "Lorem ipsum text  dummy",
        logo: mongo,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Experiences",
    subtitle: "My Career History",
    service_content: [
      {
        title: "Internship Web Developer",
        company: "Myanmar IT Consulting",
        years: "05/2019 - 07/2019",
        logo: services_logo1,
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "MDBootstrap",
          "WordPress",
          "PHP",
          "Laravel",
        ],
      },
      {
        title: "Junior Web Developer",
        company: "METATEAM MYANMAR Co., Ltd",
        years: "02/2022 - 02/2023",
        logo: services_logo2,
        technologies: [
          "PHP",
          "Laravel",
          "Vue JS",
          "Nuxt JS",
          "Alpine JS",
        ],
      },
      {
        title: "Contract Based Web Developer",
        company: "Geni Information Technology",
        years: "03/2023 - 05/2023",
        logo: services_logo3,
        technologies: [
          "PHP",
          "Laravel",
          "Vue JS",
        ],
      },
      {
        title: "Mid-Level Web Developer",
        company: "ILBC - IGCSE & A LEVEL SCHOOL",
        years: "05/2023 - present",
        logo: services_logo3,
        technologies: [
          "PHP",
          "Laravel",
          "Node JS",
          "Express JS",
          "Nest JS",
          "React JS"
        ],
      },
    ],
  },
  Testimonials: {
    title: "My MileStone",
    image: person2,
    subtitle: "Innovate, Execute, Achieve",
    testimonials_content: [
      {
        name: "POS(Point of Sale)",
        img: avatar1,
        demo: "https://saing.bib-mm.com",
      },
      {
        name: "C4RD Myanmar Online Courses",
        img: avatar2,
        demo: "https://www.c4rdmyanmar.org",
      },
      {
        name: "Wheel of Fortune",
        img: avatar3,
        demo: "#",
      },
      {
        name: "E Learning Platform",
        img: avatar4,
        demo: "https://saungpokki.ilbc.edu.mm",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Medium Clone Website",
        image: project4,
        description: "",
        ghlink:"https://github.com/shwephuehmone25/Medium_Clone_Backend",
      },
      {
        title: "E-Commerce",
        image: project3,
        description: "",
        ghlink:"https://github.com/shwephuehmone25/E_Commerce_Laravel",
      },
      {
        title: "Share Note",
        image: project1,
        description: "",
        ghlink:"https://github.com/shwephuehmone25/dnote-api-node-server",
      },
      {
        title: "Liveroom Chat",
        image: project2,
        description: "",
        ghlink:"https://github.com/shwephuehmone25/liveroom-chatapp",
      },
      {
        title: "TikTok Clone",
        image: project5,
        description: "",
        ghlink:"https://github.com/shwephuehmone25/one-minute-learn",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "shwephue7889@gmail.com",
        icon: GrMail,
        link: "mailto:shwephue7889@gmail.com",
      },
      {
        text: "+95 969498484",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
