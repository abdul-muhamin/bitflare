// for blog
export interface Blog {
    id: number;
    title: string;
    author: string;
    image: string;
    description: string;
    category: string;
    url: string
  }
  
  export interface Event {
    id: number;
    name: string;
    date: string;
    location: string;
    description: string;
  }

//   end
// contactProgress
export interface Project {
    id: number;
    src: string;
    alt: string;
    category?: string;
    name: string;
    icon: string;
    url: string // Use the string name of the icon component
  }

// end

//testimonial
export interface TestimonialData {
    name: string;
    position: string;
    image: string;
    testimonial: string;
  }
  
// 

// recent project

export interface Project {
  id: number;
  src: string;
  alt: string;
  name: string;
}

// Line.tsx
export interface LineProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}


// interface Industry
export interface Industry {
  name: string;
  color: string;
  icon: string;
}

// featured blogs
export interface featuredBlog {
  id: number;
  title: string;
  author: string;
  image: string;
  link: string;
}
// services item
export interface ServiceItem {
  Label: string;
  description: string;
  item1?: string;
  item2?: string;
  item3?: string;
  item4?: string;
  item5?: string;
}

// animated line div
export interface AnimatedLineDivProps {
  colors?: string[];  // Optional: allows customizing the colors
  duration?: number;  // Optional: allows customizing the animation duration
  width?: string;     // Optional: allows customizing the width
  height?: string;    // Optional: allows customizing the height
}


// work process
import { ReactElement } from "react";

export interface ProcessStep {
  title: string;
  icon: ReactElement;
  description: string;
}

// whyus
export interface Stat {
  id: number;
  label: string;
  value: string;
  icon: string;
  color: string;
}

// executive team 
export interface ExecutiveMember {
  name: string;
  role: string;
  description: string;
  image: string;
  executiveMember?:string
}

export interface TeamMember {
  executiveMember?:string
  name: string;
  role: string;
  category: string;
  image: string;
}

// why we love us 
export interface Reason {
  id: number;
  title: string;
  description: string;
  icon: string; // Use string for emoji placeholders
  color: string;
}

// benifits
export interface Perk {
  id: number;
  title: string;
  imgSrc: string;
}