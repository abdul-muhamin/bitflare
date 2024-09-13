interface SubLink {
  Head: string;
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
      { Head: "About Us" },
      { Head: "Our Team" },
      { Head: "Careers" },
    ],
  },
  {
    name: "Our Services",
    submenu: true,
    sublinks: [
      { Head: "UI/UX" },
      { Head: "Cloud Services" },
      { Head: "AI/ChatGPT" },
      { Head: "Chrome Extensions" },
      { Head: "DevOps" },
      { Head: "Game Development" },
      { Head: "Web Development" },
      { Head: "Automation Tools" },
    ],
  },
];
