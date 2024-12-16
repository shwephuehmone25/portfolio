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

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/medium.jpg";
import project5 from "./assets/images/Projects/tiktok.jpg";
import project6 from "./assets/images/Projects/nuxt.jpg";
import project7 from "./assets/images/Projects/medium.png";
import automobile from "./assets/images/Projects/automobile.png";
import person_project from "./assets/images/Projects/person.svg";
import person2 from "./assets/images/Projects/person2.svg";

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
    greeting: "Hello, I'm",
    firstName: "SHWE",
    LastName: "PHUE HMONE",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
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
        name: "MySQL",
        // para: "Lorem ipsum text  dummy",
        logo: mysql,
      },
      {
        name: "PostgreSQL",
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
        description: "Developed a user-friendly POS system for Saing.bib-mm.com, streamlining sales, inventory, and customer management. Features include real-time stock tracking, secure payment integration, and detailed reporting for business insights. The system enhances efficiency and accuracy, ensuring seamless operations for retail businesses of all sizes.",
        demo: "https://saing.bib-mm.com",
      },
      {
        name: "BIB AutoMobile",
        img: automobile,
        description: "Created a dynamic website for Bib-Automobile.com, showcasing a wide range of automobiles with advanced search and filtering features. The platform includes detailed vehicle listings, user-friendly navigation, and inquiry forms, providing a seamless browsing experience. Designed to enhance customer engagement and support effective online marketing for automobile sales.",
        demo: "https://bib-automobile.com",
      },
      {
        name: "C4RD Myanmar Online Courses",
        img: avatar2,
        description: "Designed and developed a customizable CMS for C4RD Myanmar, a nonprofit organization committed to promoting education and empowering young people. The platform provides an intuitive interface for managing content, users, and settings, ensuring smooth and efficient management for volunteers, staff, and other staff members. The CMS also supports real-time updates, customizable email templates, and multi-language support, providing a seamless user experience for volunteers",
        demo: "https://www.c4rdmyanmar.org",
      },
      // {
      //   name: "Wheel of Fortune",
      //   img: avatar3,
      //   demo: "#",
      // },
      {
        name: "E Learning Platform",
        img: avatar4,
        description: "A scalable e-learning platform backend using NestJS, featuring user management, real-time course sessions with Google Meet integration, secure payment systems, and administrative tools. The platform supports class scheduling, progress tracking, and dynamic course allocation, ensuring seamless interactions for students, teachers, and admins while maintaining performance and data security.",
        demo: "https://www.saungpokki.com.sg",
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
        description: "This is a robust blogging platform developed using Laravel, offering features like article writing, commenting, and user profiles, closely mirroring the Medium experience.",
        ghlink:"https://github.com/shwephuehmone25/Medium_Clone_Backend",
      },
      {
        title: "E-Commerce",
        image: project3,
        description: "This website is an online store where businesses sell products and services. Shoppers can browse, buy, and pay online, offering convenience and a global market for businesses.",
        ghlink:"https://github.com/shwephuehmone25/E_Commerce_Laravel",
      },
      {
        title: "CMS",
        image: project6,
        description: "This content management system, developed with Nuxt.js for the frontend and Laravel for the backend, offers a seamless, modern web experience for managing and publishing content efficiently.",
        ghlink:"https://github.com/shwephuehmone25/laravel-with-nuxt-js",
      },
      {
        title: "Blog",
        image: project7,
        description: "This blog management system, inspired by Medium, is developed using Alpine.js for dynamic interactivity and Laravel for robust backend functionality, offering a sleek platform for writers and readers alike.",
        ghlink:"https://github.com/shwephuehmone25/Laravel-with-Alpine-js",
      },
      {
        title: "Sh@re N0te",
        image: project1,
        description: "This is a web application mirroring Medium's essential features, crafted with React for a smooth, interactive user interface, and Express for robust backend functionality. It supports article navigation, post creation, and user interactions, offering a comprehensive blogging experience. This project serves as an excellent example for developers interested in full-stack application development, combining modern technologies to replicate a popular content-sharing platform's look and feel.",
        ghlink:"https://github.com/shwephuehmone25/dnote-api-node-server",
        ghlink2:"https://github.com/shwephuehmone25/dnote-app-react-client",
      },
      {
        title: "Liveroom Chat",
        image: project2,
        description: "This is a real-time messaging application built with React for the client-side and Node.js for the server-side, leveraging Socket.IO for instant, bidirectional communication between users and the server. This setup ensures a seamless and efficient chat experience.",
        ghlink:"https://github.com/shwephuehmone25/liveroom-chatapp",
      },
      {
        title: "One Minute Learn",
        image: project5,
        description: "This TikTok clone app, designed for educational purposes, allows users to learn various topics through engaging one-minute videos, fostering quick and interactive learning experiences.",
        ghlink:"https://github.com/shwephuehmone25/one-minute-learn",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "I'm a full-stack developer with a passion for creating dynamic and engaging websites. I am skilled in both back-end and front-end development. My portfolio, featuring successful projects, highlights my ability to deliver innovative solutions.",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
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
