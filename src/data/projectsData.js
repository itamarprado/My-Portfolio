const data = [
  {
    id: 1,
    title: "Personal Portfolio",
    desc: "This is my personal portfolio developed by me to expose all my works to the public. I tried to make it minimalist, easy comprehension and with my favourite color, which is blue",
    skills: [
      {
        id: 100,
        skillName: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        id: 101,
        skillName: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        id: 102,
        skillName: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        id: 103,
        skillName: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        id: 104,
        skillName: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
    ],
    dev: false,
    imgUrl:
      "/images/Project-Image.png",
    gitHubUrl: "https://github.com/itamarprado/my-portfolio",
    webUrl: "",
    detailedInfo: {
      myRole: "Full Stack",
      projectType: "Personal Project",
      sections: {
        overview: {
          objective: {
            title: "Objective",
            content:
              "Looking for the need to expose my projects and prove my knowledge, the principal objective of this project is to expose my works to the public, proving that I can develop beautiful projects, wireframes, websites etc.",
          },
          targetAudience: {
            title: "Target Audience",
            content:
              "Anyone who wants to see my work, contact-me or even need inspiration to build their own projects.",
          },
        },
        design: {
          wireframe: {
            title: "Wireframe",
            img: "",
            alt: "This should be a image of wireframe",
          },
        },
      },
    },
  },
  {
    id: 2,
    title: "Expense Tracker",
    desc: "This is an app to manage expenses and get some insights to improve our personal financial management. The main objective is to provide a better organization to the personal finances and quickly manage our incomes/expenses.",
    skills: [
      {
        id: 100,
        skillName: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        id: 101,
        skillName: "Javascript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        id: 102,
        skillName: "HTML",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        id: 103,
        skillName: "Tailwind CSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        id: 104,
        skillName: "Vite",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
      },
      {
        id: 105,
        skillName: "Figma",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
      }
    ],
    dev: true,
    imgUrl:
      "",
    gitHubUrl: "",
    webUrl: "",
    detailedInfo: {
      myRole: "Full Stack",
      projectType: "Personal Project",
      sections: {
        overview: {
          objective: {
            title: "Objective",
            content:
              "I always had problems with money management, so I decided to create a personal expense tracker. The objective is to facilitate the money management and to provide insights to the user, offering a better visualization from where my money comes, and goes.",
          },
          targetAudience: {
            title: "Target Audience",
            content:
              "Anyone who wants to get a better money management and a better visualization of the incomes/expenses.",
          },
        },
        design: {
          wireframe: {
            title: "Wireframe",
            img: "",
            alt: "This should be a image of wireframe",
          },
        },
      },
    },
  },
];

export default data;
