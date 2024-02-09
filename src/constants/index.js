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
  unitech,
  smallshop,
  otb,
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
      "A minimalist static website for my business which rents out fridges for univeristy students",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "next js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: unitech,
    source_code_link: "https://github.com/TDL2627/uni-tech",
  },
  {
    name: "Small Shop",
    description:
      "Web application that manages sales and stocks from a owner and teller point of view.",
    tags: [
      {
        name: "typeScript",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: smallshop,
    source_code_link: "https://github.com/TDL2627/tuckshop-finder",
  },
  {
    name: "OTB",
    description:
      "A collabrotive advanced social media platform which contains many advanced features such as swipe, live and many more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "node js",
        color: "pink-text-gradient",
      },
    ],
    image: otb,
    source_code_link: "https://github.com/Mullins69/OTB-TEMP",
  },
];

export { services, technologies, experiences, testimonials, projects };
