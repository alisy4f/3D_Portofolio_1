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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  digitalent,
  kadin,
  angin,
  codemasters,
  bookoe,
  binausaha,
  konflix,
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
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
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
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Codemasters.id",
    icon: codemasters,
    iconBg: "#383E56",
    date: "Dec 2023 - Mar 2024",
    points: [
      "Developed a personal profile website with various stacks of technologies.",
      "Created the interface of the website by slicing the design on Figma into code.",
      "Using ReactJs to develop a Book-list website based.",
      "Creating API for e-commerce website.",
      "Developing movie list web applications (KONFLIX)  using React.js and other related technologies.",
    ],
  },
  {
    title: "UX Designer Fresh Graduate Academy",
    company_name: "Digital Talent Scholarship",
    icon: digitalent,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sep 2023",
    points: [
      "Performing the end-to-end UI/UX design process starting from the ideation until iterating the usability testing process.",
      "Created the wireframe, LoFi & HiFi prototype, and mockup for several platforms such as mobile App and website.",
      "Designing the responsive interface for the website.",
      "​​Planning information architecture and site maps for website design and implementing common layouts for web pages.",
      "Doing the design iteration based on the research and usability testing results,  by implementing the concept of accessibilities and user-centered focus.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "IDCamp 2023 x KADIN",
    icon: kadin,
    iconBg: "#383E56",
    date: "Feb  2023 - Mei 2023",
    points: [
      "Developed the website for a company profile and Bookshelf Web Application.",
      "Translated the design requirements into code with HTML and CSS.",
      "Created the Progressive Web Application.",
    ],
  },
  {
    title: "UI/UX Designer Intern",
    company_name: "Angel Investment Network Indonesia",
    icon: angin,
    iconBg: "#E6DEDD",
    date: "Sept  2021 - Dec 2021",
    points: [
      "Became the  UI/UX Designer for Binausaha.id Website and did the end-to-end UI/UX Design process, starting from researching until conducting the usability testing.",
      "Designed the wireframe, LoFi & HiFi.",
      "Made the prototype and Mockup App Demo.",
      "Responsible for coordinating with the website developer vendor.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "KONFLIX",
    description:
      "Web-based platform that allows users to search, favorite, and add to watchlist movies TMDB API providing a convenient and efficient solution for recomendation movies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: konflix,
    source_code_link: "https://github.com/alisy4f/Konflix",
  },
  {
    name: "Bookoe",
    description:
      "Web application that for booklist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: bookoe,
    source_code_link: "https://github.com/alisy4f/Bookoe/tree/master",
  },
  {
    name: "Binausaha.id",
    description:
      "Bina Usaha is a platform for self-learning for female entrepreneurs across Indonesia who are engaged in the food & beverage, crafts, and fashion sectors.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: binausaha,
    source_code_link: "https://binausaha.id/",
  },
];

export { services, technologies, experiences, testimonials, projects };
