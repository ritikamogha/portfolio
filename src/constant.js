// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import mcLogo from "./assets/tech_logo/mongo_compass.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import renderLogo from "./assets/tech_logo/render.png";

// Education Section Logo's
import dewanLogo from "./assets/education_logo/dewan.png";
import pietLogo from "./assets/education_logo/piet.png";
import cjcLogo from "./assets/education_logo/cjc.png";

// Project Section Logo's
import EdusityLogo from "./assets/work_logo/image edusity.png";
import SimonSaysLogo from "./assets/work_logo/SimonSays.png";
import SpotifyCloneLogo from "./assets/work_logo/SpotifyClone.png";
import NetflixCloneLogo from "./assets/work_logo/NetflixClone.png";
import NavBar from "./assets/work_logo/NavBar.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Render", logo: renderLogo },
    ],
  },
];

// Work Experience Section Logo's

export const education = [
  {
    id: 0,
    img: dewanLogo,
    school: "Dewan College, Meerut",
    date: "Oct 2023 - June 2025",
    grade: "8.2 CGPA",
    desc: "I have completed my Master's degree (MCA) in Computer Applications from Dewan Institute Of Management & Studies, Meerut. During my time at Dewan, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at Dewan Institute has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: pietLogo,
    school: "D.N. College Meerut",
    date: "Aug 2019 - June 2022",
    grade: "8.14 CGPA",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from D.N. College Meerut. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at D.N. College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Science- B.Sc.(Computer Science)",
  },
  {
    id: 2,
    img: cjcLogo,
    school: "C.D.S Inter College, Baghpat",
    date: "Apr 2018 - March 2019",
    grade: "80%",
    desc: "I completed my class 12 education from C.D.S Inter College, Baghpat, under the U.P. board, where I studied Physics, Chemistry, and Mathematics (PCM).",
    degree: "UP(XII) - PCM ",
  },
  {
    id: 3,
    img: cjcLogo,
    school: "C.D.S Inter College, Baghpat",
    date: "Apr 2016 - March 2017",
    grade: "87.5%",
    desc: "I completed my class 10 education from C.D.S Inter College, Baghpat, under the U.P. board, where I studied Science with Computer.",
    degree: "U.P>(X), PCM",
  },
];

export const projects = [
  {
    id: 0,
    title: "Edusity University Website",
    description:
      "Build university website using React components and hooks.It's responsive website adds courses,campus, contact section and navigation bar.", 
      image: EdusityLogo,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
       "React"
    ],
    github: "https://github.com/ritikamogha/Edusity-Website",
    webapp: "https://edusity-website-gules.vercel.app/",
  },
  {
    id: 1,
    title: "Simon Says Game",
    description:
      "A fun and interactive web-based game that challenges players to repeat a sequence of colors and sounds. Built using HTML, CSS, and JavaScript, it offers an engaging user experience with smooth animations and responsive design.",
    image: SimonSaysLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ritikamogha/Simon-Says-game",
    webapp: "https://ritikamogha.github.io/Simon-Says-game/",
  },
  {
    id: 2,
    title: "Spotify Clone",
    description:
      "A web application that replicates the core features of Spotify, allowing users to search for songs, create playlists, and enjoy a music streaming experience. Built with HTML, CSS.",
    image: SpotifyCloneLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/ritikamogha/Spotify",
    webapp: "https://ritikamogha.github.io/Spotify/",
  },
  {
    id: 3,
    title: "Netflix Clone",
    description:
      "A web application that mimics the Netflix interface, allowing users to browse and watch movies and TV shows. Built with HTML, CSS, and JavaScript, it features a responsive design and smooth navigation.",
    image: NetflixCloneLogo,
    tags: ["HTML", "CSS"],
  },
  {
    id: 4,
    title: "NavBar",
    description:
      " A responsive navigation bar built with HTML, CSS, and JavaScript. It features a clean design and smooth animations, making it suitable for various web applications.",
    image: NavBar,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ritikamogha/Photography-Page",
    webapp: "https://ritikamogha.github.io/Photography-Page/",
  },
];
