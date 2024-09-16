
interface SubLink {
  Head: string;
  url?: string; // Optional URL property for sublinks
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
      { Head: "About Us", url: "/aboutUs" },
      { Head: "Our Team", url: "/team" },
      { Head: "Careers", url: "/career" },
    ],
  },
  {
    name: "Our Services",
    submenu: true,
    sublinks: [
      { Head: "UI/UX", url: "/services/ui-ux" },
      { Head: "Cloud Services", url: "/services/cloud" },
      { Head: "AI/ChatGPT", url: "/services/ai-chatgpt" },
      { Head: "Chrome Extensions", url: "/services/chrome-extensions" },
      { Head: "DevOps", url: "/services/devops" },
      { Head: "Game Development", url: "/services/game-development" },
      { Head: "Web Development", url: "/services/web-development" },
      { Head: "Automation Tools", url: "/services/automation-tools" },
    ],
  },
];
