
interface SubLink {
  Head: string;
  url?: string; // Optional URL property for sublinks
  children?: SubLink[];
}

interface NavLink {
  name: string;
  submenu: boolean;
  sublinks?: SubLink[];
}


export const navLinks: NavLink[] = [
  {
    name: "Company",
    submenu: true,
    sublinks: [
      { Head: "About Us", url: "/about-us" },
      { Head: "Our Team", url: "/team" },
      { Head: "Careers", url: "/career" },
    ],
  },
  {
    name: "Our Services",
    submenu: true,
    sublinks: [
      { Head: "UI/UX", 
        url: "#" , 
        children:[
        { Head: "Fimga", url: "/service/figma" },
        { Head: "Prototyping", url: "/service/prototyping" }
      ]},
      { Head: "Cloud Services", url: "#"
        , 
        children:[
        { Head: "AWS", url: "/service/aws" },
        { Head: "Cloud Native Application", url: "/service/cloud-native-applications" },
        { Head: "Cloud Optimization", url: "/service/cloud-optimization" },
        { Head: "Architecture Design", url: "/service/architecture-design" }
      ]
       },
      { Head: "AI/ChatGPT", url: "#", 
        children:[
        { Head: "ChatBot", url: "/service/chat-bot" },
        { Head: "ChatGPT Plugins", url: "/service/chatgpt-plugins" },
        { Head: "Content Generation", url: "/service/content-generation" },
        { Head: "Prompt Engineering", url: "/service/prompt-engineering" },
        { Head: "Flask", url: "/service/flask" },
        { Head: "Langchain", url: "/service/langchain" }
      ] },
      { 
        Head:"App Development" , url:"#"
        ,children:[
          { Head: "React Native", url: "#" },
          { Head: "Firebase", url: "/service/firebase" },
          { Head: "Flutter", url: "/service/flutter" },]
      },
      { Head: "Chrome Extensions", url: "#",
        children:[
          { Head: "ChatGPT Integration", url: "/service/chatgpt-integration" },
          { Head: "Web Scraping", url: "/service/web-scraping" },]
       },
      { Head: "DevOps", url: "#",
        children:[
          { Head: "CI/CD", url: "/service/ci-cd" },
          { Head: "Containerization", url: "/service/containerization" },
          { Head: "Automation", url: "/service/automation" },]
       },
      { Head: "Game Development", url: "#",
        children:[
          { Head: "Unity", url: "/service/unity" },
          { Head: "Unreal", url: "/service/unreal" },
          { Head: "Game Art/Design", url: "/service/game-art-design" },
          { Head: "Game Optimzation", url: "/service/game-optimzation" }]
       },
      { Head: "Web Development", url: "#",
        children:[
          { Head: "React.js", url: "/service/react-js" },
          { Head: "Nest.js", url: "/service/nest-js" },
          { Head: "Angular.js", url: "/service/angular-js" },
          { Head: "Next.js", url: "/service/next-js" },
          { Head: "Vue.js", url: "/service/vue-js" },
          { Head: "Laravel", url: "/service/laravel" },]
       },
      { Head: "Automation Tools", url: "#",
        children:[
          { Head: "Selenium", url: "/service/selenuim" },
          { Head: "Python", url: "/service/python" },]
       },
    ],
  },
];
