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
    imgUrl:
      "./public/images/mockup.png",
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
];

export default data;
