import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

export const HERO_CONTENT = `Soy un desarrollador Full Stack al le gusta utilizar una amplia variedad de tecnologías y temas. 
Siempre estoy aprendiendo de forma constante. Mi objetivo es colaborar en proyectos desafiantes aportando entusiasmo y creatividad. 
Estoy abierto a nuevas oportunidades y colaboraciones que impulsen el crecimiento mutuo.`;

export const ABOUT_TEXT = `Me llamo Antonio García Rodríguez y cuento con formación en Desarrollo de Aplicaciones Web, además de Sistemas Microinformáticos y Redes.
Me dedico a aprender constantemente y a utilizar las herramientas más actuales para crear soluciones útiles y con un diseño atractivo. 
Busco afrontar nuevos desafíos y crecer profesionalmente, comprometido con el desarrollo de aplicaciones eficaces y de calidad. 
`;


export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Juego tres en raya",
    image: project1,
    description:
      "Juego clásico del tres en raya desarrollado con React, detección automática de ganador o de empate con opción de reinicio de partida",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://tresenraya-agr.vercel.app/",
  },
  {
    title: "Ferrari World",
    image: project2,
    description:
      "Sitio web con temática de Ferrari, desarrollado con React. Enfocado en ofrecer una experiencia con una interfaz elegante.",
    technologies: ["HTML", "CSS", "React", "Javascript"],
    link: "https://ferrariworld.vercel.app/",
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  // },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  phoneNo: "+34 633 22 74 30",
  email: "angaro1926@gmail.com",
  linkedin: "https://www.linkedin.com/in/antoniogarciarodriguez-/"
};
