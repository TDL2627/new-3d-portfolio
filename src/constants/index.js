import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  wbwr,
  ayoba,
  lc,
  codespace,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Animator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer Learner",
    company_name: "Code Space",
    icon: codespace,
    iconBg: "#383E56",
    date: "Feb 2020 - July 2020",
    points: [
      "Where I was first introduced to coding",
      "Used PHP, Bootstrap, HTML, MySQL, and CSS",
      "Built mini projects to help improve skill.",
    ],
  },
  {
    title: "Micro App Developer",
    company_name: "Ayoba",
    icon: ayoba,
    iconBg: "#E6DEDD",
    date: "Feb 2021 - June 2022",
    points: [
      "Developing and maintaining micro apps inside the Ayoba MTN App.",
      "Used Node JS and Angular 12",
      "Collaboration with other developers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intern Web Developer",
    company_name: "Life Choices",
    icon: lc,
    iconBg: "#383E56",
    date: "July 2021 - March 2022",
    points: [
      "Used Vue Js ,Mongo DB and Wix for page building.",
      "Collaborating with other developers and teaching new students the basics.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intermediate Eccomerce Developer",
    company_name: "WBWR",
    icon: wbwr,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Shopify and other related technologies.",
      "Currently working on major brands such Under Armour, Crocs, Vans, Birkenstock, Avalanche and many more. ",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "After Kannemeyer optimized our website, our traffic increased by 50%. We can't thank them enough!.",
    name: "Alex Sexwale",
    designation: "Senior developer",
    company: "WBWR",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Lynn Boyce",
    designation: "Project Manager",
    company: "WBWR",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      " I thought it was impossible to make an app as beautiful as our product, but he proved me wrong.",
    name: "Mark Stone",
    designation: "Developer",
    company: "Ayoba",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Unitech",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tuck Shop Finder",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Small Shop",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
