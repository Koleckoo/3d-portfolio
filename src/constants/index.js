import { greyson } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  php,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "PHP - Laravel",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Junior Developer",
    company_name: "Greyson",
    icon: greyson,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Koleckoo",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/janilletsko/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "CalenDr",
    description: "Online Platform Connecting Patients and Doctors.",
    link: "https://github.com/petramare/Doctor",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Movie Searcher",
    description: "Movie searcher with word-cloud component.",
    link: "https://github.com/Koleckoo/IC-group-assignment",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Countries wiki",
    description: "Countries encyklopedia with focus on flags and population.",
    link: "https://github.com/Koleckoo/countries",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Space-tourism",
    description:
      "Fake space tourism page with focus on improving css abilites and responsive design.",
    link: "https://github.com/Koleckoo/space-travel-agency",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "E-ON photovoltaic calculator",
    description:
      "Developed Front-End for photovolaic calculator, which calculates in how many years would you start profiting after getting a photovoltaic system for appartment houses. ",
    link: "https://inovace-eon.cz/eon-calculator-fe/",
  },
  {
    iconUrl: car,
    theme: "btn-back-yellow",
    name: "G-Space app",
    description:
      "Developed a react native app with managed workflow using expo. App is focused on reservations of parking and work places.",
    link: "",
  },
];
