// import Image from "next/image";
import Landingpage from "@/components/landingPage";
import GenerativeAISolutions from "@/components/GenerativeAISolutions"
import HowWeAre from "@/components/WhoWeAre";
import DedicatedServices from "@/components/DedicatedServices";
import AchievementsSection from "@/components/AchievementsSection";
import RecentWork from "@/components/RecentWork";
import FeaturedBlogs from "@/components/FeaturedBlog";
// import Testimonial from "@/components/Testimonial";
import TechImages from "@/components/Technologies";
import ContactForm from "@/components/ContactForm";
export default function Home() {
  return (
    <main>
      <Landingpage/>
      <GenerativeAISolutions/>
      <HowWeAre/>
      <AchievementsSection/>
      <RecentWork/>
      <DedicatedServices/>
      <FeaturedBlogs/>
      {/* <Testimonial/> */}
      <TechImages/>
      <ContactForm/>
    </main>
  );
}
