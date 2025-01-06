import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Hariharapranav",
  initials: "RS",
  url: "https://dillion.io",
  location: "Tamilnadu, IN",
  locationLink: "https://www.google.com/maps/place/tiruppur",
  description:
    "Software Engineer | Passionate about building impactful solutions and empowering others through technology.",
  summary:
    "In 2023, I earned my degree in Computer Science and Engineering from Bannari Amman Institute of Technology. As a full-stack developer, I specialize in React.js, Next.js, and Flutter, with experience hosting projects on AWS EC2. Passionate about building impactful web and mobile applications, I also share insights and knowledge through platforms like Instagram and Medium.",
  avatarUrl: "/me.png",
  skills: [
    "ReactJs",
    "Next.js",
    "Flutter",
    "Typescript",
    "Node.js",
    "Java",
    "Python",
    "Scala",
    "MySql",
    "FastApi",
    "Figma",
    "HTML",
    "CSS",
    "JavaScript",
    "C Programming",
    "C++",      
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ipranav1702@gmail.com",
    tel: "+91 8610434536",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/hariharapranav",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hariharapranav/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Pranav74301042",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@DevOrbitbiz",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Edsols",
      href: "http://www.edsols.in/",
      badges: [],
      location: "On-Site",
      title: "FullStack Developer Intern",
      logoUrl: "/edsols.png",
      start: "Nov 2024",
      end: "Present",
      description:
        "As a full-stack developer intern, I worked with React and Tailwind CSS for front-end development, Python and FastAPI for back-end APIs, and AWS for deploying scalable applications. This role gave me hands-on experience in building responsive, efficient, and production-ready web solutions.",
    },
    {
      company: "Bannari Amman Institutte of Technology",
      badges: [],
      href: "https://www.bitsathy.ac.in/",
      location: "On-Site",
      title: "Software Developer Intern",
      logoUrl: "/bitsathy.png",
      start: "Jun 2023",
      end: "Nov 2024",
      description:
        "As a Graduate Engineer Trainee, I developed BitHack (a college hackathon website) using HTML, CSS, JavaScript and PHP. I also conducted skill development sessions for students, teaching technologies like Flutter and React.js to help them build modern applications.",
    },
    {
      company: "Virtusa",
      href: "https://www.virtusa.com/",
      badges: [],
      location: "Online",
      title: "Java FullStack Developer Intern",
      logoUrl: "/virtusa.png",
      start: "Jan 2023",
      end: "Apr 2023",
      description:
        "As a Java Full Stack Developer Intern at Virtusa, I worked with Java, Angular, TypeScript, and Spring Boot to build and maintain scalable web applications. My role involved developing front-end components, implementing back-end APIs, and ensuring seamless integration between the two for efficient application performance.",
    },
  ],
  education: [
    {
      school: "Bannari Amman Institutte of Technology",
      href: "https://www.bitsathy.ac.in/",
      degree: "Bachelors in Computer Science and Engineering",
      logoUrl: "/bitsathy.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Saradha Vidhyalaya Matric Higher Secondary School",
      href: "",
      degree: "HSC",
      logoUrl: "/school.png",
      start: "2017",
      end: "2019",
    },
    {
      school: "Saradha Vidhyalaya Matric Higher Secondary School",
      href: "",
      degree: "SSLC",
      logoUrl: "/bag.png",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Giphy Clone",
      href: "https://giphy-clone-react-ten.vercel.app/",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "With the integration of the Giphy API, I built a Giphy clone using React.js. This project allows users to search for and explore GIFs seamlessly, showcasing dynamic API integration and an intuitive, responsive user interface.",
      technologies: [
        "Reactjs",
        "JavaScript",
        "TailwindCSS",
        "Giphy API",
        "Vercel"
      ],
      links: [
        {
          type: "Website",
          href: "https://giphy-clone-react-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hariharapranav/giphy-clone-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/giphy.webm",
    },
    {
      title: "Chillflix",
      href: "https://chillflix-ae6eb.web.app/",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "Chillflix is a Netflix-inspired UI built using Angular and integrated with the TMDB API. The platform allows users to browse recently released movies, view detailed information about the cast and crew, and watch trailers, providing an engaging and seamless user experience",
      technologies: [
        "Angular",
        "Typescript",
        "TailwindCSS",
        "TMDB API",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://chillflix-ae6eb.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/chillflix.webm",
    },
    {
      title: "Pinterest Clone",
      href: "https://pinterest-clone-c597e.web.app/",
      dates: "Mar 2023 - May 2023",
      active: true,
      description:
        "Pinterest clone using React.js, allowing users to explore and organize visually appealing content. The project features a responsive design, dynamic content rendering, and seamless user interactions, replicating the core functionality of Pinterest.",
      technologies: [
        "Reactjs",
        "JavaScript",
        "TailwindCSS",
        "Firebase"
      ],
      links: [
        {
          type: "Website",
          href: "https://pinterest-clone-c597e.web.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hariharapranav/PinterestUI-Clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/pintclone.webm",
    },
    {
      title: "Virtual Website",
      href: "https://hariharapranav.github.io/Virtual-Website/",
      dates: "Sep 2022 - Nov 2022",
      active: true,
      description:
        "I created a virtual environment website using A-Frame technology, enabling users to explore places in an immersive virtual setting. The platform supports VR headsets for a fully interactive experience, providing a seamless way to navigate and engage with 3D environments.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AFrame",
        "Github Hosting"
      ],
      links: [
        {
          type: "Website",
          href: "https://hariharapranav.github.io/Virtual-Website/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Hariharapranav/Virtual-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "vrweb.webm",
    },
  ],
} as const;
