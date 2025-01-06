import { Config } from "@/types/config";
import { MdOutlineDevices, MdAttachment } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiBooks, PiMediumLogoBold } from "react-icons/pi";
import { GoalIcon } from '@primer/octicons-react'
import { LuGithub, LuPencil, LuLinkedin, LuRss } from "react-icons/lu";
import { FaXTwitter,FaGamepad } from "react-icons/fa6";
import { FaReact, FaAws } from "react-icons/fa";
import { SiPhp, SiDart, SiLatex, SiTensorflow, SiPytorch, SiOpencv, SiScikitlearn, SiLangchain, SiFlutter, SiPandas, SiNumpy, SiJupyter, } from 'react-icons/si';
import { AiOutlinePython } from "react-icons/ai";
import { RiJavaLine, RiJavascriptLine } from "react-icons/ri";
import { SiFastapi, SiKubernetes } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { VscTerminalLinux } from "react-icons/vsc";
import { DiRedis } from "react-icons/di";
import {
  TbBrandCpp, TbBrandTypescript,
  TbBrandGolang, TbBrandNextjs,
  TbBrandDjango, TbBrandDocker, TbBrandMysql,
  TbMarkdown, TbBrandAstro, TbBrandTerraform,
  TbPhotoSquareRounded
} from "react-icons/tb";

const config: Config = {
  avatar: '/images/fin.jpg',
  title: "HAMZAOUI Thameur - v56 | Visual Computing Engineer | AI & Machine Learning Expert",
  description: ", I’m Hamzaoui Thameur, a Visual Computing Engineer with a passion for AI 🤖, Computer Vision 👁️, and Machine Learning 📊.",
  author: "Verus56",
  keywords: ["HAMZAOUI Thameur", "verus56", "Visual Computing Engineer | AI & Machine Learning Expert", "AI", "Vision"],
  status: "Visual Computing Engineer | AI & Machine Learning Expert⚡️",
  siteURL: "https://tmrdata.tech/",
  openGraph: {
    url: "https://tmrdata.tech/",
    type: "website",
    siteName: "HAMZAOUI Thameur - v56 | Visual Computing Engineer | AI & Machine Learning Expert",
    title: "HAMZAOUI Thameur - v56 | Visual Computing Engineer | AI & Machine Learning Expert",
    description:"I’m Hamzaoui Thameur, a Visual Computing Engineer with a passion for AI 🤖, Computer Vision 👁️, and Machine Learning 📊. I focus on developing innovative AI models, intelligent agents, and AI-powered mobile applications 📱 that solve real-world problems. With a strong engineering background and a curiosity for deep learning and automation 🔧, I strive to push the boundaries of technology. I’m also an open-source contributor 🌐, mentor, and lifelong learner 📚. Outside of work, I enjoy basketball 🏀, gaming 🎮, photography 📸, and storytelling 🎤. Let’s connect to explore my work!.",

  },
  navItems: [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    /*{ path: '/post', label: 'Post' },*/
    /*{ path: '/gallery', label: 'Gallery' },*/
    {path: '/contact', label: 'Contact'},
  ],
  socialLinks: [
    { url: `https://github.com/verus56`, icon: LuGithub, name: 'GitHub' },
    { url: `https://www.linkedin.com/in/hamzaoui-thameur/`, icon: LuLinkedin, name: 'LinkedIn' },
    { url: `https://medium.com/@verus56`, icon: PiMediumLogoBold, name: 'Medium' },
    { url: `https://twitter.com/verus56`, icon: FaXTwitter, name: 'Twitter' },
    { url: `/rss.xml`, icon: LuRss, name: 'RSS Feed' },
    { url: `/cv.pdf`, icon: MdAttachment, name: 'CV' },
  ],
  about: {
    "firstName": 'HAMZAOUI',
    "lastName": 'Thameur',
    "middleName": "",
    "preferredName": "",
    "additionalName": "obito",
    "pronouns": 'He/Him',
    "githubUsername": "verus56",
    "introduction": `
Hi, I’m Hamzaoui Thameur, a Visual Computing Engineer with a passion for AI 🤖, Computer Vision 👁️, and Machine Learning 📊. I focus on developing innovative AI models, intelligent agents, and AI-powered mobile applications 📱 that solve real-world problems.

With a strong engineering background and a curiosity for deep learning and automation 🔧, I strive to push the boundaries of technology. I’m also an open-source contributor 🌐, mentor, and lifelong learner 📚.

Outside of work, I enjoy basketball 🏀, gaming 🎮, photography 📸, and storytelling 🎤. Let’s connect to explore my work!.

**Self-motivated, Team player,AIEnthusiast ,Love coding 👨🏻‍💻**
    `,
  "lifestyles": [
    {
      "icon": LuGithub,
      "title": "Open Source Enthusiast",
      "text": "Committed to advancing the tech community through active contributions to GitHub projects in AI, computer vision, and software engineering."
    },
    {
      "icon": LuPencil,
      "title": "Knowledge Sharer",
      "text": "Dedicated to mentoring and sharing insights on data science, computer vision, and AI advancements."
    },
    {
      "icon": GoalIcon,
      "title": "Active Lifestyle",
      "text": "Strive for balance with basketball games and fitness routines that fuel my creativity and focus."
    },
    {
      "icon": TbPhotoSquareRounded,
      "title": "Creative Photographer",
      "text": "Find inspiration through photography—capturing the vastness of skies and the vibrance of urban life."
    },
    {
      "icon": FaGamepad,
      "title": "Gaming Enthusiast",
      "text": "Dive into immersive gaming experiences, blending strategy, creativity, and a passion for design, including game development projects."
    }
  ],

  "techStacks": {
    programmingLanguages: [
      { name: 'Python', icon: AiOutlinePython },
      { name: 'C++', icon: TbBrandCpp },
      { name: 'C', icon: TbBrandCpp },
      { name: 'PHP', icon: SiPhp },
      { name: 'Dart', icon: SiDart },
      { name: 'TypeScript', icon: TbBrandTypescript },
      { name: 'JavaScript', icon: RiJavascriptLine },
      { name: 'Markdown', icon: TbMarkdown },
      { name: 'LaTeX', icon: SiLatex }
    ],
    frameworks: [
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'OpenCV', icon: SiOpencv },
      { name: 'next.js', icon: TbBrandNextjs },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'LangChain', icon: SiLangchain },
      { name: 'Flutter', icon: SiFlutter },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: BiLogoFlask },
      { name: 'Django', icon: TbBrandDjango },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
      { name: 'Jupyter Notebook', icon: SiJupyter },
      { name: 'Linux Terminal', icon: VscTerminalLinux }
    ]
  }

  },
  resume: {
    "educations": {
      "icon": IoSchoolOutline,
      "title": "Education",
      "items": [
        {
          company: "Université des Sciences et de la Technologie Houari Boumediene",
          location: "Algeria",
          role: "Master's Degree in Computer Vision",
          duration: "Sep. 2022 — Jun. 2024",
          tasksMarkdown: `
- **Minor Specialty:** Visual Computing
- **Graduate-level Courses:** Advanced Algorithms and Complexity, Problem Solving, Database Architecture, Operating Systems, Artificial Vision, Data Mining, Machine Learning, Networks, Code Generation and Optimization, Mobile Systems, Knowledge Representation and Reasoning, Game Theory, Image Synthesis, Data Visualization, Project Management.
- **B.S.-level Courses:** Software Engineering, Principles of Programming Languages, Assembly Language and System Programming, Digital Design, Numerical Analysis.
- TA: Image Processing and Analysis, Multimedia Communication, Neural Networks and Machine Learning, Network Programming, Game Design and Virtual Reality, Mobile Operating Systems, Creative Workshop.
- **Thesis Theme:** Developed a Comprehensive Customer Support System, Classifying Tickets Using ML and DL Techniques.
`        ,
        },
        {
          company: "Université des Sciences et de la Technologie Houari Boumediene",
          location: "Algeria",
          role: "Bachelor's Degree in Computer Science",
          duration: "Sep. 2018 — Jun. 2022",
          tasksMarkdown: `

- **Degree:** Bachelor's in Computer Science
- **Modules Offered:** Algorithms and Data Structures, Databases, Probability and Statistics, Python Programming, Object-Oriented Programming, Graph Theory, Information Systems, Full-Stack Web Development, Networks.
- **Thesis Theme:** Design and Development of a Facial Detection and Recognition System with Mask Utilization Using Deep Learning.
- **University:** Houari Boumediene University of Science and Technology.
- TA: Algorithms and Data Structures, Python Programming, Object-Oriented Programming, Full-Stack Web Development, Networks.
`},
      ],
    },
    "awardLeaderships": {
      "icon": PiTrophy,
      "title": "Award & Leaderships",
      "items": [
        {
          company: "injaz AL arabe",
          location: "Qatar",
          role: "The chief technology officer wink ",
          duration: "fev, 2024 -",
          tasksMarkdown: `
- The Global Possibilities Pitch Award by Fedex
- The Value Creation Excellence Award by Investcorp
- The Sustainability Award by Nestle
        `,
        },
        {
          company: "injaz el djazair",
          location: "Algeria",
          role: "The chief technology officer of wink ",
          duration: "fev, 2024 -",
          tasksMarkdown: `
- The best company award in algeria
        `,
        },
        {
          company: "Hackathon Junction",
          location: "Algeria",
          role: "Machine Learning Engineer",
          duration: "fev, 2024 -",
          tasksMarkdown: `
- the secound place in the hackathon with project OPENFIRE
        `,
        },



        
      ],
    },
    "teachingExperiences": {
      "icon": PiBooks,
      "title": "Volunter",
      "items": [
        {
          "company": "Open Minds Club",
          "location": "Algeria",
          "role": "SG Board Member",
          "duration": "Feb. 2019 - Jun. 2024",
          "tasksMarkdown": `
- Elected as Secretary General, tasked with overseeing and coordinating the activities of the scientific club.
- Coordinated events and initiatives related to science and technology at the university.
- Director of the OMCAST department, overseeing the planning and execution of scientific events and activities.
- Built numerous open-source projects and contributed to the community.
- Provided training for club members.
        `,
        },
        {
          "company": "Scouts musulmans algériens",
          "location": "Algeria",
          "role": "Leader",
          "duration": "sep. 2005 - Now",
          "tasksMarkdown": ` `,
        },
      ],
    },
    "professionalExperiences": {
      "icon": MdOutlineDevices,
      "title": "Professional Experience",
      "items": [
        {
          "company": " Buildingo Labs",
          "location": "Canada",
          "role": "AI/ML Engineer specializing in Mobile Applications",
          "duration": "jun 2024",
          "tasksMarkdown": `
- Developed a Flutter-based mobile application with a user-friendly interface.
- Created an AI recommendation system leveraging user data to provide personalized suggestions.
- Implemented machine learning algorithms to enhance user engagement.
- Collaborated with backend teams to optimize API performance and data management.
          `,
        },
        {
          "company": "Icosnet",
          "location": "Algeria",
          "role": "Machine Learning Engineer",
          "duration": "sep. 2023 - Jun. 2024",
          "tasksMarkdown": `
- Developed a customer support system that classifies tickets using ML and DL techniques.
- Extracted textual data from ticket images using OCR technologies.
- Applied transformer-based models to propose solutions for customer challenges.

          `,
        },
        {
          "company": "  Ministry of Youth and Sports of Algeria",
          "location": "ALgeria",
          "role": " IT Technology in Arab Gaming",
          "duration": "Jul. 2023 - Aug. 2023",
          "tasksMarkdown": `
- Oversaw network and streaming configuration for the Ministry of Youth and Sports of Algeria.
- Managed score and results tracking.
          `,
        },
        {
          "company": "Air Algérie",
          "location": "Algeria",
          "role": "Mobile Development and DevOps intern",
          "duration": "Jul. 2023 - sep. 2023",
          "tasksMarkdown": `
- Partnered with the mobile development team to design innovative mobile applications.
- Implemented DevOps practices to streamline development and deployment processes.
          `,
        },

        {
          "company": "Injaz El Djazair",
          "location": "Algeria",
          "role": "The chief technology officer of wink ",
          "duration": "jan. 2023 - fev. 2024",
          "tasksMarkdown": `
-During my internship at Injaz El Djazair, I gained valuable skills in entrepreneurship and business management. I acquired foundational knowledge essential for establishing and managing a startup. This experience allowed me to apply these skills in practice by co-founding the startup Wink.

          `,
        },

        {
          "company": "RIIMA Laboratory Usthbr",
          "location": "Algeria",
          "role": "Computer Vision intern ",
          "duration": "jan. 2023 - fev. 2024",
          "tasksMarkdown": `
- Completed an end-of-studies internship at the USTHB laboratory, focusing on the design and development of a facial detection and recognition system for masked faces.
- Utilized Deep Learning techniques, including Convolutional Neural Networks (CNN) and the Multi-task Cascaded Convolutional Networks (MTCNN) model.
- Gained hands-on experience in computer vision and deep learning, developing essential skills through a challenging research project.

          `,
        },
      ],
    },
  },
  "giscusConfig": {
    id: "comments",
    repo: "verus56/verus56",
    repoId: "R_kgDOLBatdw",
    category: "General",
    categoryId: "DIC_kwDOLBatd84CjpPs",
    mapping: "pathname",
    term: "Welcome to @giscus/react component!",
    reactionsEnabled: "1",
    emitMetadata: "1",
    inputPosition: "bottom",
    theme: "dark_tritanopia",
    lang: "en",
    loading: "lazy",
  },
  "googleAnalyticId": process.env.NEXT_PUBLIC_GA_ID || '',
  "googleTagManagerId": process.env.NEXT_PUBLIC_GTM_ID || '',
};

export default config;
